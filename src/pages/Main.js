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
      <OnePokemon selected={selected} handleClick={props.addToTeam} label='Capture Pokemon'/>
    </div>
  );
};

export default Main;

// {/* <div className="pokemon-list">
//     <button className="select-pokemon">
//         <div className="each-pokemon" onClick={grabSelected}>
//             <div>{name}</div>
//             <img
//             className="pokeball"
//             src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/closed-pokeball-color.png"
//             alt="pokeball"
//             />
//         </div>
//     </button>
// </div> */}
