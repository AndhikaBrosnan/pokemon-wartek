import React from "react";
import { Link } from "react-router-dom";

const Pokemon = () => {
  return (
    <div className="card">
      {/* <Link to="/pokemon-name"> */}
      <div className="content">
        <img
          alt=""
          className="right floated mini ui image"
          src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"
        />
        <div className="header">Bulbasaur</div>
        <div className="meta">Daun, Racun</div>
        <div className="description">
          Bulbasaur dapat ditemukan beristirahat di bawah sinar matahari. Di
          punggungnya terdapat sebuah benih. Benih tersebut tumbuh semakin besar
          dengan menyerap sinar mahari.
        </div>
      </div>
      {/* </Link> */}
      {/* <div className="extra content"></div> */}
    </div>
  );
};

export default Pokemon;
