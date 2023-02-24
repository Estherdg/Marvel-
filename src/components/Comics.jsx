import React from "react";
import { ApiCall } from "../context/ApiCall.jsx"
import Card from "../components/Card"

export function Comics() {
  let inCosa = ApiCall("comics");
  console.log(inCosa);

  return (
    <div>
      <h1>Marvel Comics</h1>
    </div>
  );
}
