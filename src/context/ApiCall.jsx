
export const ApiCall = async () => {
  await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707"
    )
    .then(response => response.json())
    .then(data => console.log(data))
  };

