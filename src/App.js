import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import MyTeam from "./pages/MyTeam";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/myteam">
          <MyTeam />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
