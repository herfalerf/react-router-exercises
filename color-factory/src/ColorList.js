import React from "react";
import { NavLink } from "react-router-dom";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <NavLink to={`/colors/${colorName}`}>{colorName}</NavLink>
    </li>
  ));

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the color factory</h1>
        <h1>
          <NavLink to="/colors/new">Add a color</NavLink>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Please select a color</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;
