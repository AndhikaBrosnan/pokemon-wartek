import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PokemonDetail = ({ chosenPokemon }) => {
  console.log("chosen Pokemon: ", chosenPokemon);
  return (
    <div className="ui container" style={{ paddingTop: "4%" }}>
      <div class="ui grid">
        <div class="six wide column"></div>
        <div class="ten wide column"></div>
      </div>

      <Link to="/">
        <img
          alt=""
          src="https://c4.wallpaperflare.com/wallpaper/121/449/307/pokemon-cartoon-minimalist-pokeball-wallpaper-thumb.jpg"
          style={{ height: "8vh" }}
        />
      </Link>
      <div className="ui container">
        <img
          alt=""
          style={{ height: "25vh", marginBottom: "-3%" }}
          src={
            chosenPokemon["sprites"] !== undefined
              ? chosenPokemon["sprites"]["front_default"]
              : 0
          }
        />
      </div>

      <h1>Pokemon Name: {chosenPokemon.name}</h1>
      <h2>Base Experience:{chosenPokemon.base_experience} </h2>
      <h3>
        Types 1:
        {chosenPokemon["stats"] !== undefined
          ? chosenPokemon["types"][0]["type"]["name"]
          : "none"}
        <div></div>
        Types 2:
        {chosenPokemon["stats"] !== undefined && chosenPokemon["types"][1]
          ? chosenPokemon["types"][1]["type"]["name"]
          : "none"}
      </h3>
      <h3>Stats: </h3>
      <div className="ui grid">
        <div className="two wide column">
          <h5>HP</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][0]["base_stat"]
            : 0}
        </div>
        <div className="two wide column">
          <h5>Attack</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][1]["base_stat"]
            : 0}
        </div>
        <div className="two wide column">
          <h5>Defense</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][2]["base_stat"]
            : 0}
        </div>
        <div className="two wide column">
          <h5>Sp. Atk</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][3]["base_stat"]
            : 0}
        </div>
        <div className="two wide column">
          <h5>Sp. Def</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][4]["base_stat"]
            : 0}
        </div>
        <div className="two wide column">
          <h5>Speed</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][0]["base_stat"]
            : 0}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chosenPokemon: state.chosenPokemon,
  };
};

export default connect(mapStateToProps)(PokemonDetail);
