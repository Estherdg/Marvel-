import React from "react";
import { ApiCallCharapter } from "../context/ApiCall.jsx"

export function Characters() {
  ApiCallCharapter("charapter");

  return (
    <div>
      <h1>Marvel Characters</h1>
    </div>
  );
}
