const Pet = ({ name, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "important-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "dog" }),
    React.createElement(Pet, { name: "Pepper", animal: "bird" }),
    React.createElement(Pet, { name: "Moon", animal: "cat" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
