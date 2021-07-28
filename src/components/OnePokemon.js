import React from "react";
import MyTeam from "../pages/MyTeam";

const OnePokemon = (props) => {
  if (props.currentPokemon) {
    const { name, sprites, height, weight, types } = props.currentPokemon;

    return (
      <div className="onePokemon">
        <div className="card">
          <div className="spriteAndName">
            <img src={sprites.front_default} alt="sprite" />
            <img src={sprites.front_shiny} alt="sprite" />
            <h3>{name}</h3>
          </div>
          <div>
            <h3>Height: {height}</h3>
            <h3>Weight: {weight}</h3>
            <h3>
              Type:{" "}
              {types.map((type) => (
                <span>{type.type.name} </span>
              ))}
            </h3>
            <button className="cardButton" onClick={() => <MyTeam />}>
              Capture Pokémon
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="placeHolderCard">
        Please select a <span>Pokémon</span> from the list.
      </div>
    );
  }
};
export default OnePokemon;
