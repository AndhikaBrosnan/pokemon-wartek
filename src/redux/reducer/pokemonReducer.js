import { FETCH_POKEMON } from "../type/pokemon";

const INITIAL_STATE = [];

const pokemonReducer = (pokemon = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return pokemon.concat(action.payload);
    default:
      return pokemon;
  }
};

export default pokemonReducer;
