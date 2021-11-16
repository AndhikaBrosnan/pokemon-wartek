import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchChosenPokemonData } from "../../redux/action/pokemon";

const Pokemon = ({ name }) => {
  const dispatch = useDispatch();

  const handleClickPokemon = async (name) => {
    fetchChosenPokemonData(dispatch, name);
  };

  return (
    <Link
      onClick={() => handleClickPokemon(name)}
      className="ui card"
      style={{ width: "20%" }}
      to={`${name}`}
    >
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </Link>
  );
};

export default Pokemon;
