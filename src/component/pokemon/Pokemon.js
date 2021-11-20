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
    <Link onClick={() => handleClickPokemon(name)} to={`${name}`}>
      <div className="column">
        <div className="ui fluid card">
          <div className="content">
            <div className="center aligned header">{name}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
