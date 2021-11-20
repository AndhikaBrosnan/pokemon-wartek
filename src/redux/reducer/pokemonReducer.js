import { FETCH_POKEMON } from "../type/pokemon";

// initial state
const INIT_POKES = [];

const pokemonReducer = (pokemon = INIT_POKES, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return pokemon.concat(action.payload.results);
    default:
      return pokemon;
  }
};

export default pokemonReducer;
