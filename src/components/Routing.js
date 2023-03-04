import React from "react";
import { Routes, Route } from "react-router-dom";
import { Characters } from "./Characters/Characters.jsx";
import { Comics } from "./Comics/Comics.jsx";
import { Home } from "./Home.jsx";
import { Series } from "./Series/Series.jsx";

const Routing = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Characters" element={<Characters />} />
      <Route path="/Comics" element={<Comics />} />
      <Route path="/Series" element={<Series />} />
    </Routes>

  );
};

export default Routing;
