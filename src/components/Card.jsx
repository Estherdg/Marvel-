import React, { useState } from 'react';

const Card = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} />
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
      </button>
    </div>
  );
};

export default Card;
