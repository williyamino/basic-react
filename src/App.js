import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1 id="important-id">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Lunar" animal="dog" />
      <Pet name="Pepper" animal="bird" />
      <Pet name="Moon" animal="cat" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
