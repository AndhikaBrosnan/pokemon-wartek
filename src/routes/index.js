import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../component/App";
import PokemonDetail from "../component/pokemon/PokemonDetail";

const Routes = ({ chosenPokemon }) => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/:chosenPokemon" exact component={PokemonDetail} />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chosenPokemon: state.chosenPokemon,
  };
};

export default connect(mapStateToProps)(Routes);
