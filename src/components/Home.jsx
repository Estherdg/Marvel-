import logo from "../img/marvel.svg";
import React from "react";
import { Link } from "react-router-dom";
import { ApiCall } from "../context/ApiCall.jsx";


export const Home = () => {
  ApiCall();

  return (
    <div>
      <h1 className="tittle">Marvel App</h1>
      <Link to="./components/Home.jsx">
        <img src={logo} alt="logo-marvel" className="App-logo" />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/Characters">Personajes</Link>
          </li>
          <li>
            <Link to="/Comics">Comics</Link>
          </li>
          <li>
            <Link to="/Series">Series</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
