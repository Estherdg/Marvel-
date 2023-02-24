import React from "react";
import { ApiCall } from "../context/ApiCall.jsx"

export function Characters() {

  let apiCallResults = ApiCall("characters");
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
  );
}
