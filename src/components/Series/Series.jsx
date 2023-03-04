import React from "react";
import CardSeries from "../Series/CardSeries.jsx"
import { useState, useEffect } from 'react';

function MarvelSuperheroes() {
  const [jsonData, setJsonData] = useState(null);
  const urlMarvel =
    'https://gateway.marvel.com/v1/public/series?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707';

  async function getMarvelData() {
    try {
      const response = await fetch(urlMarvel);
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMarvelData();
  }, []);

  return (
    <div>
      <nav>
        <h1>
          Marvel Series
        </h1>
      </nav>
      {jsonData &&
        jsonData.data.results.map((serie) => (
          <CardSeries serie={serie} />
        ))}
    </div>
  );
}

export function Series() {
  return <MarvelSuperheroes />;
}
