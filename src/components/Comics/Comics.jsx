import React from 'react';
import { useState, useEffect } from 'react';
import CardComics from '../Comics/CardComics.jsx';

//import { ApiCall } from "../context/ApiCall.jsx";
//import Card from "../components/Card";

function MarvelSuperheroes() {
  const [jsonData, setJsonData] = useState(null);
  const urlMarvel =
    'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707';

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
          Marvel Comics
        </h1>
      </nav>
      {jsonData &&
        jsonData.data.results.map((comic) => (
          <CardComics comic={comic} />
        ))}
    </div>
  );
}

export function Comics() {
  return <MarvelSuperheroes />;
}