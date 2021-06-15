import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul>
      <li key="dogs">
        <NavLink to="/dogs">
          <h1>Dogs</h1>
        </NavLink>
      </li>
      {dogs.map((dog) => (
        <li key={dog.name}>
          <NavLink to={`/dogs/${dog.name}`}>
            <h2>{dog.name}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
