import React from "react";
import ReactDOM from "react-dom";
import App from "../component/App";

test("Render App Component without Crashing: ", () => {
  const div = document.createElement("div");
  //will error `could not find react-redux context value` (Provide already implemented on /src/index.js)
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
