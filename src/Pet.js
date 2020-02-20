import React from "react";
export const Pet = ({ name, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal)
  ]);
};
