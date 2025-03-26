<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WeatherController
{
    #[Route("/weather/{degree}", name: "name")]
    public function highlandersays($degree): Response
    {
        $response1 = new Response('the weather is cold', 200);
        $response2 = new Response('the weather is hot', 200);
        $response3 = new Response('degree is missspeled', 200);

        if ($degree > 30) {
            return $response2;
        } elseif ($degree < 30) {
            return $response1;
        } else {
            return $response3;
        }
    }
}
