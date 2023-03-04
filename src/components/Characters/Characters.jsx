import React from "react";
import CardCharacters from "../Characters/CardCharacters";
import { useState, useEffect } from 'react';

  function MarvelSuperheroes() {
    const [jsonData, setJsonData] = useState(null);
    const urlMarvel =
      'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707';

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
      <div className="superHeroes">
        <nav>
          <h1>
            Marvel Superheroes
          </h1>
        </nav>
        {jsonData &&
          jsonData.data.results.map((character) => (
            <CardCharacters character={character} />
          ))}
      </div>
    );
  }


  export function Characters() {
    return <MarvelSuperheroes />;
  }



  /*let apiCallResults = ApiCall("characters");
  let charactersArray = [];

  apiCallResults.then((result) => {
    result.data.results.forEach((element) => {
      charactersArray.push(element);
    });
  });
  console.log(charactersArray);

  return (
    <div>
      <h1>Marvel Characters</h1>
    </div>
  );*/

