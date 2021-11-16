import React from "react";

const PokemonDetail = () => {
  return (
    <div>
      <h1>Name: Pikachu</h1>
      <p>Ability: Electricity</p>
    </div>
  );
};

export default connect()(PokemonDetail);
