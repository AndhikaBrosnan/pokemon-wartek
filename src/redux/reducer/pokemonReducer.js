import { FETCH_POKEMON } from "../type/pokemon";

// initial state
const INIT_POKES = [];

const pokemonReducer = (pokemon = INIT_POKES, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      //reset the pokemon state to init (no addition & need to reset data on landing)
      pokemon = INIT_POKES;
      return pokemon.concat(action.payload.results);
    default:
      return pokemon;
  }
};

export default pokemonReducer;
