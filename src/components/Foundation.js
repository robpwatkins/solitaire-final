import React, { useState, useEffect } from 'react';
import Card from './Card';

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
      // setCardIndex(null);
      // if (cardIndex === cardPosition) {
      //   setCardPosition(cardPosition => cardPosition - 1)
      // }
    } else
    if (successfulMove.length > 0 && isDestination) {
      setCards([...cards, ...successfulMove]);
      setSuccessfulMove(successfulMove => successfulMove = []);
      // setCardIndex(null);
      setCurrentMove(currentMove => currentMove = []);
      setIsDestination(isDestination => isDestination = false);
    }
  }, [currentMove.length, isOrigin, /* cardIndex */, /* cardPosition */, cards, isDestination, setSuccessfulMove, successfulMove, currentMove, setCurrentMove]);

  const handleClick = event => {
    props.handleClick(event);
    if (currentMove.length > 0) {
      setIsDestination(true);
    } else {
      setIsOrigin(true);
    }
  }

  let fndClass = [
    'foundation',
    // isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  console.log(cards);
  return (
    <div className={fndClass} onClick={handleClick}>
      {cards.length > 0 && (
        cards.map((card, index) => {
          return (
            <Card {...cards[index]} key={index} />
          )
        })
      )}
    </div>
  )
}

export default Foundation;