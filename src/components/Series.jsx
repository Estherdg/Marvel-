import React from "react";
import { ApiCall } from "../context/ApiCall.jsx";

export function Series() {
  ApiCall("series");

  return (
    <div>
      <h1>Marvel Series</h1>
    </div>
  );
}
