import React from "react";
//import ReactModal from "react-modal";
import CardCharacters from "../Characters/CardCharacters";
import { useState, useEffect } from "react";
import "./styleChar.css";

function MarvelCharacters() {
  const [jsonData, setJsonData] = useState(null);
  const urlMarvel =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707";

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
    <div className="gridCH">
      {jsonData &&
        jsonData.data.results.map((character) => (
          <CardCharacters key={character.id} character={character} />
        ))}
    </div>
  );
}

export function Characters() {
  return <MarvelCharacters />;
}
