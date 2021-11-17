import React from "react";
import PokemonList from "./pokemon/PokemonList";
import { Offline, Online } from "react-detect-offline";

const App = () => {
  return (
    <div className="ui container" style={{ paddingTop: "4%" }}>
      <Offline>
        <h1>Internet is offline</h1>
      </Offline>
      <Online>
        <PokemonList />
      </Online>
    </div>
  );
};

export default App;
