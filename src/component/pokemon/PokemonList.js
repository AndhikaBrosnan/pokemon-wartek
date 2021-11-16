import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "../../redux/action/pokemon";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemonData(dispatch); // eslint-disable-next-line
  }, []);

  const mapOfPokemon = pokemons.map((item, index) => (
    <Pokemon key={index} name={item.name} />
  ));

  return (
    <div>
      <img
        alt=""
        src="https://c4.wallpaperflare.com/wallpaper/121/449/307/pokemon-cartoon-minimalist-pokeball-wallpaper-thumb.jpg"
        style={{ height: "8vh" }}
      />
      <h1>My Pokédex</h1>
      <div className="ui cards">{mapOfPokemon}</div>
    </div>
  );
};

export default PokemonList;
