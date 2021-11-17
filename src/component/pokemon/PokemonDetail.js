import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PokemonDetail = ({ chosenPokemon }) => {
  useEffect(() => {
    if (
      chosenPokemon &&
      chosenPokemon["sprites"] &&
      chosenPokemon["stats"] &&
      chosenPokemon["types"]
    ) {
      //local storage sprites front
      localStorage.setItem(
        "chosenPokemon_sprite",
        chosenPokemon["sprites"]["front_default"]
      );

      //local storage types 0
      localStorage.setItem(
        "chosenPokemon_type0",
        chosenPokemon["types"][0]["type"]["name"]
      );

      //local storage types 1
      localStorage.setItem(
        "chosenPokemon_type1",
        chosenPokemon["types"][1]["type"]["name"]
      );

      //local storage stats 0
      localStorage.setItem(
        "chosenPokemon_stat0",
        chosenPokemon["stats"][0]["base_stat"]
      );

      //local storage stats 1
      localStorage.setItem(
        "chosenPokemon_stat1",
        chosenPokemon["stats"][1]["base_stat"]
      );

      //local storage stats 2
      localStorage.setItem(
        "chosenPokemon_stat2",
        chosenPokemon["stats"][2]["base_stat"]
      );

      //local storage stats 3
      localStorage.setItem(
        "chosenPokemon_stat3",
        chosenPokemon["stats"][3]["base_stat"]
      );

      //local storage stats 4
      localStorage.setItem(
        "chosenPokemon_stat4",
        chosenPokemon["stats"][4]["base_stat"]
      );

      //local storage stats 5
      localStorage.setItem(
        "chosenPokemon_stat5",
        chosenPokemon["stats"][5]["base_stat"]
      );
    }
  }, [chosenPokemon]);

  return (
    <div className="ui container" style={{ paddingTop: "4%" }}>
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
              : localStorage.getItem("chosenPokemon_sprite")
          }
        />
      </div>

      <h1>Pokemon Name: {chosenPokemon.name}</h1>
      <h2>Base Experience:{chosenPokemon.base_experience} </h2>
      <h3>
        Types 1:
        {chosenPokemon["stats"] !== undefined
          ? chosenPokemon["types"][0]["type"]["name"]
          : localStorage.getItem("chosenPokemon_type0")}
        <div></div>
        Types 2:
        {chosenPokemon["stats"] !== undefined && chosenPokemon["types"][1]
          ? chosenPokemon["types"][1]["type"]["name"]
          : localStorage.getItem("chosenPokemon_type1")}
      </h3>
      <h3>Stats: </h3>
      <div className="ui grid">
        <div className="two wide column">
          <h5>HP</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][0]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat0")}
        </div>
        <div className="two wide column">
          <h5>Attack</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][1]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat1")}
        </div>
        <div className="two wide column">
          <h5>Defense</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][2]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat2")}
        </div>
        <div className="two wide column">
          <h5>Sp. Atk</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][3]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat3")}
        </div>
        <div className="two wide column">
          <h5>Sp. Def</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][4]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat4")}
        </div>
        <div className="two wide column">
          <h5>Speed</h5>
          {chosenPokemon["stats"] !== undefined
            ? chosenPokemon["stats"][0]["base_stat"]
            : localStorage.getItem("chosenPokemon_stat5")}
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
