import { combineReducers } from "redux";

import pokemonReducer from "./pokemonReducer";
import chosenPokemonReducer from "./chosenPokemonReducer";

export default combineReducers({
  pokemon: pokemonReducer,
  chosenPokemon: chosenPokemonReducer,
});
