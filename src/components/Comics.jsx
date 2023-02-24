import React from "react";
import { ApiCallComics } from "../context/ApiCall.jsx"
import ComicCard from "../components/ComicCard"

export function Comics() {
  ApiCallComics("comics");

  return (
    <div>
      <h1>Marvel Comics</h1>
    </div>
  );
}
