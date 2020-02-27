import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="important-id">Adopt Me!</h1>
      <Pet name="Lunar" animal="dog" />
      <Pet name="Pepper" animal="bird" />
      <Pet name="Moon" animal="cat" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
