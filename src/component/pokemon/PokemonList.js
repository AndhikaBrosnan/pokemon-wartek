import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "../../redux/action/pokemon";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  console.log("my pokedex: ", pokemons);

  useEffect(() => {
    fetchPokemonData(dispatch); // eslint-disable-next-line
  }, []);

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
