import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import MyTeam from "./pages/MyTeam";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [team, setTeam] = useState([]);

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const data = await response.json();
    setPokemonList(data.results);
  };

  const addToTeam = (pokemon) => {
    setTeam([...team, pokemon]);
  };

  const removeFromTeam = (pokemon) => {
    const index = team.findIndex((poke) => pokemon.id === poke.id);
    const updatedArray = [...team];
    updatedArray.splice(index, 1);
    setTeam(updatedArray);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route path="/main">
          <Main pokemonList={pokemonList} addToTeam={addToTeam} />
        </Route>
        <Route path="/myteam">
          <MyTeam team={team} remove={removeFromTeam}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
