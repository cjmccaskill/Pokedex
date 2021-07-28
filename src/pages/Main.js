import React from "react";
import OnePokemon from "../components/OnePokemon";

const Main = (props) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

  const [pokemon, setPokemon] = React.useState(null);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);

  const getPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.results);
  };

  React.useEffect(() => {
    getPokemon();
  }, []);

  const loaded = () => {
    return (
      <div className="container">
        <div className="pokemonList">
          {pokemon.map((selectedPokemon) => {
            const { name } = selectedPokemon;
            const grabSingle = async () => {
              const response = await fetch(selectedPokemon.url);
              const data = await response.json();
              setCurrentPokemon(data);
            };
            return (
              <button>
                <div className="eachPokemon" onClick={grabSingle}>
                  <div>{name}</div>
                  <img
                    className="pokeball"
                    src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/closed-pokeball-color.png"
                    alt="pokeball"
                  />
                </div>
              </button>
            );
          })}
        </div>
        <OnePokemon currentPokemon={currentPokemon} />
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return pokemon ? loaded() : loading();
};
export default Main;
