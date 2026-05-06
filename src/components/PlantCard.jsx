import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [soldOut, setSoldOut] = useState(false);

  const handleSoldOut = () => {
    setSoldOut(!soldOut);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!soldOut ? (
        <button className="primary" onClick={handleSoldOut}>In Stock</button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
