import React, { useState } from 'react';
import '../styles/Card.css'; // Create a separate CSS file for styling

const CardGrid = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', frontContent: 'Front Content 1', backContent: 'Back Content 1' },
    { id: 2, title: 'Card 2', frontContent: 'Front Content 2', backContent: 'Back Content 2' },
    { id: 3, title: 'Card 3', frontContent: 'Front Content 3', backContent: 'Back Content 3' },
    // Add more cards as needed
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  return (
    <div className="card-grid">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`myCard ${activeCard === card.id ? 'active' : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">{card.title}</p>
              <p>{card.frontContent}</p>
            </div>
            <div className="backSide">
              <p className="title">{card.title}</p>
              <p>{card.backContent}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
