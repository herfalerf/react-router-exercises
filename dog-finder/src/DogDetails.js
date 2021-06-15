import React from "react";

function DogDetails({ dog }) {
  return (
    <div className="Dog">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src}></img>
      <h3>Facts</h3>
      {dog.facts.map((fact) => (
        <p>{fact}</p>
      ))}
    </div>
  );
}

export default DogDetails;
