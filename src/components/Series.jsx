import React from "react";
import { ApiCall } from "../context/ApiCall.jsx";

export function Series() {
  let apiCallResults = ApiCall("series");
  let seriesArray = [];

  apiCallResults.then((result) => {
    result.data.results.forEach((element) => {
      seriesArray.push(element);
    });
  });
  console.log(seriesArray);

  return (
    <div>
      <h1>Marvel Series</h1>
    </div>
  );
}
