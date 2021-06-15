import React from "react";
import { NavLink } from "react-router-dom";

const Color = ({ hex, color, history }) => {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>This is {color}.</p>
      <p>
        <NavLink to="/">Go back</NavLink>
      </p>
    </div>
  );
};

export default Color;
