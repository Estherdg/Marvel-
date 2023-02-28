import React from "react";
//import { ApiCall } from "../context/ApiCall.jsx";
import { useState, useEffect } from 'react';

function MarvelSuperheroes() {
  const [jsonData, setJsonData] = useState(null);
  const urlMarvel =
    'https://gateway.marvel.com/v1/public/series?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707';
  const [showDescription, setShowDescription] = useState(false);

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

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <div>
      <nav>
        <h1>
          Marvel Series
        </h1>
      </nav>
      {jsonData &&
        jsonData.data.results.map((serie) => (
          <div className="card" key={serie.id}>
            <h2>{serie.title}</h2>
            <img
              src={`${serie.thumbnail.path}/portrait_fantastic.${serie.thumbnail.extension}`}
              alt={serie.title}
            />
            <p>{serie.description}</p>
            {serie.description && (
              <>
                <button
                  onClick={toggleDescription}
                  className={showDescription ? 'active' : ''}
                >
                  {showDescription ? 'Leer menos' : 'Leer más'}
                </button>
                {showDescription && <p>{serie.description}</p>}
              </>
            )}
          </div>
        ))}
    </div>
  );
}

export function Series() {
  return <MarvelSuperheroes />;
}
