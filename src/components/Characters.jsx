import React from "react";
import { ApiCall } from "../context/ApiCall.jsx"

export function Characters() {
  ApiCall("characters");
  //const characters = [];

  return (
    <div>
      <h1>Marvel Characters</h1>
    </div>
  );
}
