import React from "react";
import { ApiCallSeries } from "../context/ApiCall.jsx";

export function Series() {
  ApiCallSeries("series");

  return (
    <div>
      <h1>Marvel Series</h1>
    </div>
  );
}
