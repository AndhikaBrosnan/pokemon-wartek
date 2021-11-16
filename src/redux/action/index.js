import pokeApi from "../../api/pokeApi";

export const fetchPokemon = async () => {
  try {
    const response = await pokeApi.get("pokemon?limit=15");
    console.log("response called: ", response.data);
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Pokemon",
    };
  }
};
