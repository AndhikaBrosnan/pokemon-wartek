import { FETCH_POKEMON } from "../type/pokemon";

const INITIAL_STATE = [];

const pokemonReducer = (pokemon = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      console.log("reducer called: ", action.payload.results);
      return pokemon.concat(action.payload.results);
    default:
      return pokemon;
  }
};

export default pokemonReducer;
