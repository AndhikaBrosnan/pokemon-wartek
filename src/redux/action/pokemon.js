import { fetchPokemon } from ".";
import { FETCH_POKEMON } from "../type/pokemon";

export const fetchPokemonData = async (dispatch) => {
  const response = await fetchPokemon();
  dispatch({
    type: FETCH_POKEMON,
    payload: response,
  });
};
