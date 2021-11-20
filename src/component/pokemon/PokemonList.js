import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "../../redux/action/pokemon";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonList = () => {
  //get the data from reducer (similar to mapStateToProps)
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPokemonData(dispatch, offset); // eslint-disable-next-line
  }, []);

  const mapOfPokemon = pokemons.map((item, index) => (
    <Pokemon key={index} name={item.name} />
  ));

  const fetchData = () => {
    if (pokemons.length === 0 || pokemons.length < 20) {
      setHasMore(false);
    }
    setOffset(offset + 20);
    fetchPokemonData(dispatch, offset);
  };

  return (
    <div>
      <img
        alt=""
        src="https://c4.wallpaperflare.com/wallpaper/121/449/307/pokemon-cartoon-minimalist-pokeball-wallpaper-thumb.jpg"
        style={{ height: "8vh" }}
      />
      <h1>My Pokédex</h1>
      <h5 className="ui red header">* choose Pokemon Name to see details..</h5>
      <div className="ui three column grid">
        <InfiniteScroll
          dataLength={pokemons.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<div className="ui yellow message">Loading...</div>}
        >
          {mapOfPokemon}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PokemonList;
