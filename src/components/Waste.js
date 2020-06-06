import React, { useState, useEffect } from 'react';
import Card from './Card';

const Waste = (props) => {
  const [cards, setCards] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const { 
    talonIsClicked, 
    talonCards, 
    setTalonCards,
    setTalonIsClicked
  } = props;

  useEffect(() => {
    if (talonIsClicked) {
      let newTalonCards = talonCards.slice();
      setCards(cards => cards = [...cards, newTalonCards.splice(newTalonCards.length - 1)[0]]);
      setTalonCards(talonCards => talonCards = (newTalonCards));
      setTalonIsClicked(false);
    }
  }, [setCards, talonCards, talonIsClicked, setTalonCards, setTalonIsClicked]);

  const handleClick = event => {
    props.handleClick(event);
    if (!isOrigin) {
      setIsOrigin(true);
    }
  }

  return (
    <div className="waste" onClick={handleClick}>
      {cards.length > 0 &&
        <Card 
          name="waste" 
          {...cards[cards.length - 1]} 
          isOrigin={isOrigin}
        />
      }
    </div>
  )
}

export default Waste;