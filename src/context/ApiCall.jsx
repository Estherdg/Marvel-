/*import { useState, useEffect } from 'react';

function MarvelSuperheroes(section) {
    const [jsonData, setJsonData] = useState(null);
    const urlMarvel =
    `https://gateway.marvel.com/v1/public/${section}?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707`;
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
          <h2>
            Marvel Superheroes
          </h2>
        </nav>
        {jsonData &&
          jsonData.data.results.map((character) => (
            <div className="card" key={character.id}>
              <h2>{character.name}</h2>
              <img
                src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
                alt={character.name}
              />
              {character.description && (
                <>
                  <button
                    onClick={toggleDescription}
                    className={showDescription ? 'active' : ''}
                  >
                    {showDescription ? 'Leer menos' : 'Leer más'}
                  </button>
                  {showDescription && <p>{character.description}</p>}
                </>
              )}
            </div>
          ))}
      </div>
    );
  }

   export function ApiCall() {
    return  <MarvelSuperheroes />;
  }

  export function Characters() {
    return <MarvelSuperheroes />;
  }

export async function ApiCall(section) {
  let jsonData;
  const urlMarvel = `https://gateway.marvel.com/v1/public/${section}?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707`;

  try {
    const response = await fetch(urlMarvel);
    const data = await response.json();
    jsonData = data;
    return await jsonData;
  } catch (error) {
    console.error("Error en ApiCall", error);
  }
}*/
