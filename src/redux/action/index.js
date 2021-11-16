import pokeApi from "../../api/pokeApi";

export const fetchPokemon = async () => {
  try {
    const response = await pokeApi.get("pokemon?limit=52");
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Pokemon",
    };
  }
};

export const fetchChosenPokemon = async (pokemonName) => {
  try {
    const response = await pokeApi.get("pokemon/" + pokemonName);
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Pokemon",
    };
  }
};
