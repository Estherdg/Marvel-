export async function ApiCall(section) {
  let jsonData;

  const urlMarvel = `https://gateway.marvel.com/v1/public/${section}?ts=1&apikey=5d155dab5a4be93ca92f67b208168c03&hash=0fd9b4823a201e0606416c4962039707`;

  try {
    const response = await fetch(urlMarvel);
    const data = await response.json();
    jsonData = data;
    return jsonData.data.results;
  } catch (error) {
    console.error(error);
  }
}
