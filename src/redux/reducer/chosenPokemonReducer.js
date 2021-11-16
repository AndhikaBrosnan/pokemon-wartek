import { CHOSEN_POKEMON } from "../type/pokemon";

//initial state
const INIT_CHOSENPOKE = {};

const chosenPokemonReducer = (chosenPokemon = INIT_CHOSENPOKE, action) => {
  if (action.type === CHOSEN_POKEMON) {
    chosenPokemon = action.payload;
    return chosenPokemon;
  }
  return chosenPokemon;
};

export default chosenPokemonReducer;
