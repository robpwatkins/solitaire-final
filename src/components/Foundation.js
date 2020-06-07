import React, { useState, useEffect } from 'react';
import Card from './Card';
import { dealCards } from '../dealCards';
// import { gameWon } from '../gameWon';

const Foundation = (props) => {
  const [cards, setCards] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [isShooting, setIsShooting] = useState(false);
  const { 
      currentMove, 
      setCurrentMove, 
      successfulMove,
      setSuccessfulMove,
      deck,
      // foundationComplete,
      setFoundationComplete,
      hasBeenWon
    } = props;

  useEffect(() => {
    setCards(dealCards(13, deck));
  }, [deck])

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

  useEffect(() => {
    if (cards.length === 13) {
      setFoundationComplete(foundationComplete => [...foundationComplete, 'complete']);
    }

  }, [cards.length, setFoundationComplete, cards]);

  useEffect(() => {
    if (hasBeenWon) {
      shootCards();
    }
  }, [hasBeenWon])

  const shootCards = () => {
    function delay(i) {
      if (i === 0) return;
      setTimeout(() => {
        let newCards = cards.slice();
        newCards.reverse();
        newCards.splice(i);
        setCards(cards => cards = newCards);
      }, 500*i)
    }
    for (let i = cards.length; i > 0; i--) {
      if (i === 0) return;
      ((i) => {
        delay(i)
      })(i);
    }
  }

  const handleClick = event => {
    setIsShooting(true);
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
            isShooting={isShooting}
          />
        )
      }
    </div>
  )
}

export default Foundation;