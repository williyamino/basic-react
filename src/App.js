import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "important-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Lunar", animal: "dog" }),
    React.createElement(Pet, { name: "Pepper", animal: "bird" }),
    React.createElement(Pet, { name: "Moon", animal: "cat" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
