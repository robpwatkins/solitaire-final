import React, { useState, useEffect } from 'react';
import Card from './Card';

const Waste = (props) => {
  // const [cards, setCards] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const { 
    // talonIsClicked, 
    // talonCards, 
    // setTalonCards,
    // setTalonIsClicked,
    cards,
    setCards,
    currentMove,
    setCurrentMove,
    successfulMove,
    // setSuccessfulMove
  } = props;

  useEffect(() => {
    if (currentMove.length === 0 && isOrigin) {
      setIsOrigin(false);
    } 
    if (successfulMove.length > 0 && isOrigin) {
      let newCards = cards.slice();
      newCards.splice(cards.length - 1);
      setCards(cards => cards = newCards);
    }
  }, [currentMove, isOrigin, setIsOrigin, successfulMove, cards, setCards]);

  const handleClick = event => {
    if (!isOrigin) {
      setIsOrigin(true);
      setCurrentMove(currentMove => currentMove = [cards[cards.length - 1]]);
    } else {
      setIsOrigin(false);
    }
  }

  let wasteClass = [
    'waste',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  wasteClass = wasteClass.join(' ');

  return (
    <div className={wasteClass} onClick={handleClick}>
      {cards.length > 0 &&
        <Card 
          name="waste" 
          {...cards[cards.length - 1]} 
          handleClick={props.handleClick}
          // isOrigin={isOrigin}
        />
      }
    </div>
  )
}

export default Waste;