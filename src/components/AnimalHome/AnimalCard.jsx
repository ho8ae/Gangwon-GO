import React from 'react';
import { Card } from 'react-bootstrap';

const AnimalCard = ({ animal, onClick }) => {
  return (
    <Card onClick={onClick} className="animal-card" style={{ cursor: 'pointer' }}>
      <div className="animal-image-container">
        <Card.Img variant="top" src={animal.image} className="animal-image" />
      </div>
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;
