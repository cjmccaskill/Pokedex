import { useState } from "react";
import AllPokemon from "../components/AllPokemon";
import OnePokemon from "../components/OnePokemon";

const Main = (props) => {
  const [selected, setSelected] = useState(null);

  const selectPokemon = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    setSelected({
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      height: data.height,
      weight: data.weight,
      types: data.types[0].type.name,
    });
  };

  return (
    <div className="container">
      <AllPokemon
        pokemonList={props.pokemonList}
        selectPokemon={selectPokemon}
      />
      <OnePokemon
        selected={selected}
        handleClick={props.addToTeam}
        label="Capture Pokemon"
      />
    </div>
  );
};

export default Main;
