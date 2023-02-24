import React from "react";
import { ApiCall } from "../context/ApiCall.jsx";
import Card from "../components/Card";

export function Comics() {
  let apiCallResults = ApiCall("comics");
  let comicsArray = [];
  
  apiCallResults.then((result) => {
    result.data.results.forEach((element) => {
      comicsArray.push(element);
    });
  });
  console.log(comicsArray);
  return (
    <div>
      <h1>Marvel Comics</h1>
      {comicsArray.map((item, index) => {
        return <li key={index}>{item.title.value}</li>;
      })}
    </div>
  );
}
