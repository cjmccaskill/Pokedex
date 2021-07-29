import React from "react";
import { Link } from "react-router-dom";

const OnePokemon = (props) => {
  const loaded = () => {
    return (
      <div className="one-pokemon">
        <div className="card">
          <div className="sprite-and-name">
            <img src={props.selected.sprites.front_default} alt="sprite" />
            <img src={props.selected.sprites.front_shiny} alt="sprite" />
            <h3>{props.selected.name}</h3>
          </div>
          <div>
            <h3>Height: {props.selected.height}m</h3>
            <h3>Weight: {props.selected.weight}kg</h3>
            <h3>
              Type: <span className="type-span">{props.selected.types}</span>
            </h3>
            <Link to="/myteam">
              <button
                className="card-btn"
                onClick={() => props.handleClick(props.selected)}
              >
                {props.label}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const loading = () => (
    <div className="placeholder-card">
      Please select a <span>Pokémon</span> from the list.
    </div>
  );

  return props.selected ? loaded() : loading();
};

//      else {
//     return (
//       <div className="placeholder-card">
//         Please select a <span>Pokémon</span> from the list.
//       </div>
//     );
//   }
// };
export default OnePokemon;

// <div>
//   <h1>{props.selected.name}</h1>
//   <img src={props.selected.img} alt={props.selected.name} />
//   <h2> TYPE {props.selected.type}</h2>
//   <button onClick={() => props.handleClick(props.selected)}>
//     {props.label}
//   </button>
// </div>
// const { name, sprites, height, weight, types } = props.selected;
