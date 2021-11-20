import { fetchPokemon } from ".";
import { FETCH_POKEMON, CHOSEN_POKEMON } from "../type/pokemon";
import { fetchChosenPokemon } from ".";

export const fetchPokemonData = async (dispatch, offset) => {
  const response = await fetchPokemon(offset);
  dispatch({
    type: FETCH_POKEMON,
    payload: response,
  });
};

export const fetchChosenPokemonData = async (dispatch, pokemonName) => {
  const response = await fetchChosenPokemon(pokemonName);
  dispatch({
    type: CHOSEN_POKEMON,
    payload: response,
  });
};
