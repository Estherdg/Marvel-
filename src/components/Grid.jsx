import React from 'react';
import Card from './Card';

const Grid = ({ items }) => {

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Grid;
