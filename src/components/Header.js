import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/home">
        <h1>Pokédex</h1>
      </Link>
      <Link to="https://www.pokemon.com/us/">
        <img
          className="logo"
          src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png"
          alt="Pokemon"
        />
      </Link>
      <Link to="/myteam">
        <h1>My Team</h1>
      </Link>
    </div>
  );
};
export default Header;
