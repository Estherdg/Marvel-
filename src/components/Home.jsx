import logo from "../img/marvel.svg";
import comicsImg from "../img/comics.png"
import personaje from "../img/personaje.png"
import serieImg from "../img/marvelStudios.png"
import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <h1 className="tittle">MARVEL APP</h1>
      <Link to="./components/Home.jsx">
        <img src={logo} alt="logo-marvel" className="App-logo" />
      </Link>
      <div className="Home-list">
        <Link className="H-P" to="/Characters">
        <img src={personaje} alt="personaje" className="personajeImg"></img>
        </Link>
        <Link className="H-P" to="/Comics">
          <img src={comicsImg} alt="comicsImg" className="comicsImg"></img>
          </Link>
        <Link className="H-P" to="/Series">
        <img src={serieImg} alt="serieImg" className="serieImg"></img>
        </Link>
      </div>
    </div>
  );
}
