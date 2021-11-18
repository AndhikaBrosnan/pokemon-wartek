import React from "react";
import PokemonList from "./pokemon/PokemonList";
import { Offline } from "react-detect-offline";

const App = () => {
  return (
    <div className="ui container" style={{ paddingTop: "4%" }}>
      <Offline>
        <div className="ui negative message">
          <div className="header">We're sorry, your internet is offline</div>
        </div>
      </Offline>
      <PokemonList />
    </div>
  );
};

export default App;
