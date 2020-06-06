import React, { useState, useEffect } from 'react';
import Card from './Card';

const Foundation = (props) => {
  const [cards, setCards] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
const { 
    currentMove, 
    setCurrentMove, 
    successfulMove,
    setSuccessfulMove 
  } = props;

  useEffect(() => {
    if (currentMove.length === 0 && isDestination) {
      setIsDestination(false);
    }
    if (currentMove.length === 0 && isOrigin) {
      setIsOrigin(isOrigin => setIsOrigin(false));
    }
    if (successfulMove.length > 0 && isOrigin) {
      let newCards = cards.slice();
      newCards.splice(newCards.length - 1);
      setCards(cards => cards = newCards);
      setSuccessfulMove(successfulMove => successfulMove = []);
      setIsOrigin(isOrigin => isOrigin = false);
    } else
    if (successfulMove.length > 0 && isDestination) {
      setCards([...cards, ...successfulMove]);
      setSuccessfulMove(successfulMove => successfulMove = []);
      setCurrentMove(currentMove => currentMove = []);
      setIsDestination(isDestination => isDestination = false);
    }
  }, [currentMove.length, isOrigin, cards, isDestination, setSuccessfulMove, successfulMove, currentMove, setCurrentMove]);

  const handleClick = event => {
    cards.length === 0 && props.handleClick(event);
    if (currentMove.length === 0) {
      setIsOrigin(true);
      let newCards = cards.slice();
      setCurrentMove(newCards.splice(cards.length - 1));
    } else 
    if (!isOrigin) {
      setIsDestination(true);
    } else {
      setIsOrigin(false);
      setCurrentMove([]);
    }
  }

  let fndClass = [
    'foundation',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  return (
    <div className={fndClass} onClick={handleClick}>
      {cards.length > 0 && (
          <Card 
            {...cards[cards.length - 1]} 
            name="foundation"
            isOrigin={isOrigin}
            handleClick={props.handleClick}
          />
        )
      }
    </div>
  )
}

export default Foundation;