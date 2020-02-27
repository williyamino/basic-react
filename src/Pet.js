import React from "react";
export const Pet = ({ name, animal }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{animal}</h2>
    </div>
  );
};
