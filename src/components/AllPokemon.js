import React from "react";

const AllPokemon = (props) => {
  return (
    <div>
      {props.pokemonList.map((pokemon, index) => {
        return (
          <div className="pokemon-list">
            <button
              className="select-pokemon"
              onClick={() => props.selectPokemon(pokemon)}
            >
              <div className="each-pokemon">
                <div>{pokemon.name}</div>
                <img
                  className="pokeball"
                  src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/closed-pokeball-color.png"
                  alt="pokeball"
                />
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllPokemon;
