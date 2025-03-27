import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const Weatherforecaster = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/weatherapi")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return res.json(); // Parse the JSON response
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error 1: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> The Weather Report</h1>
      <div className="bg-blue-100 p-4 rounded shadow">
        <p>
          <strong>Weather : </strong>
          <strong>{weather.data}</strong>
        </p>
      </div>
    </div>
  );
};
