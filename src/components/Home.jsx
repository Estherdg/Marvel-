import logo from "../img/marvel.svg";
import MarvelChar from "../img/MarvelChar.jpg";
import MarvelComics from "../img/MarvelComics.webp";
import MarvelSerie from "../img/MarvelSerie.webp";
import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <Link to="./components/Home.jsx">
        <img src={logo} alt="logo-marvel" className="App-logo" />
      </Link>
      <div className="Home-list">
        <Link to="/Characters">
          <img src={MarvelChar} alt="personaje" className="personajeImg"></img>
        </Link>
        <Link to="/Comics">
          <img src={MarvelComics} alt="comicsImg" className="comicsImg"></img>
        </Link>
        <Link to="/Series">
          <img src={MarvelSerie} alt="serieImg" className="serieImg"></img>
        </Link>
      </div>
    </div>
  );
}
