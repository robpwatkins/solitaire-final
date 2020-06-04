import React, { useState, useEffect } from 'react';
import Card from './Card';
import { setDestination } from '../setDestination';

const Foundation = (props) => {
  const [cards, setCards] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
const { 
    playCards,
    count, 
    // handleClick,
    deck, 
    currentMove, 
    setCurrentMove, 
    successfulMove,
    setSuccessfulMove 
  } = props;

  useEffect(() => {
    if (currentMove.length === 0 && isDestination) {
      setIsDestination(false);
      // setCardIndex(null);
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
      // setCurrentMove(currentMove => currentMove = []);
      // setCardIndex(null);
      // if (cardIndex === cardPosition) {
      //   setCardPosition(cardPosition => cardPosition - 1)
      // }
    } else
    if (successfulMove.length > 0 && isDestination) {
      console.log('heyoo');
      setCards([...cards, ...successfulMove]);
      setSuccessfulMove(successfulMove => successfulMove = []);
      // setCardIndex(null);
      setCurrentMove(currentMove => currentMove = []);
      setIsDestination(isDestination => isDestination = false);
    }
  }, [currentMove.length, isOrigin, /* cardIndex */, /* cardPosition */, cards, isDestination, setSuccessfulMove, successfulMove, currentMove, setCurrentMove]);

  const handleClick = event => {
    if (cards.length === 0) {
      props.handleClick(event);
    } 
    if (currentMove.length > 0) {
      setIsDestination(true);
    } else {
      setIsOrigin(true);
    }
  }

  let fndClass = [
    'foundation',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  // console.log(cards);
  return (
    <div className={fndClass} onClick={handleClick}>
      {cards.length > 0 && (
          <Card 
            {...cards[cards.length - 1]} 
            name="foundation"
            handleClick={props.handleClick} 
            isOrigin={isOrigin}
            setIsOrigin={setIsOrigin}
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            // setIsDestination={setDestination}
            cards={cards}
          />
        )
      }
    </div>
  )
}

export default Foundation;