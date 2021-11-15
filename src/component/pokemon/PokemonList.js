import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  return (
    <div>
      <h1>My Pokédex</h1>
      <div className="ui cards">
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
      </div>
    </div>
  );
};

export default PokemonList;
