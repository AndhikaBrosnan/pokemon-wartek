import React from "react";
import PokemonList from "./pokemon/PokemonList";

const App = () => {
  return (
    <div className="ui container" style={{ paddingTop: "4%" }}>
      <PokemonList />
    </div>
  );
};

export default App;
