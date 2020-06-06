import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Card from './Card';
import Stack from './Stack';

const Tableau = (props) => {
  const [cards, setCards] = useState([]);
  const [cardPosition, setCardPosition] = useState(props.count - 1);
  const [cardIndex, setCardIndex] = useState(null);
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const { 
    count, 
    // handleClick,
    deck, 
    currentMove, 
    setCurrentMove, 
    successfulMove,
    setSuccessfulMove 
  } = props;
  
  useEffect(() => {
    setCards(dealCards(count, deck));
  }, [count, deck])

  useEffect(() => {
    if (currentMove.length === 0 && isDestination) {
      setIsDestination(false);
      setCardIndex(null);
    }
    if (currentMove.length === 0 && isOrigin) {
      setIsOrigin(isOrigin => setIsOrigin(false));
    }
    if (successfulMove.length > 0 && isOrigin) {
      let newCards = cards.slice();
      newCards.splice(cardIndex);
      setCards(cards => cards = newCards);
      // setSuccessfulMove(successfulMove => successfulMove = []);
      setIsOrigin(isOrigin => isOrigin = false);
      // setCardIndex(null);
      if (cardIndex === cardPosition) {
        setCardPosition(cardPosition => cardPosition - 1)
      }
    } else
    if (successfulMove.length > 0 && isDestination) {
      setCards([...cards, ...successfulMove]);
      setSuccessfulMove(successfulMove => successfulMove = []);
      // setCardIndex(null);
      setCurrentMove(currentMove => currentMove = []);
      setIsDestination(isDestination => isDestination = false);
    }
  }, [currentMove.length, isOrigin, cardIndex, cardPosition, cards, isDestination, setSuccessfulMove, successfulMove, currentMove, setCurrentMove]);

  const handleClick = event => {
    if (cards.length === 0 && currentMove.length > 0) {
      props.handleClick(event);
      setIsDestination(true);
    };
  }

  // console.log(count);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      // onClick={cards.length === 0 ? props.handleClick : undefined}
      onClick={handleClick}
    >
      {cards.length > 0 && (
        cards.map((card, index) => {
          if (index >= cardPosition) {
            return (
              <Card 
                {...cards[index]} 
                key={index} 
                index={index}
                name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
                handleClick={props.handleClick}
                isOrigin={isOrigin}
                setIsOrigin={setIsOrigin}
                setIsDestination={setIsDestination}
                currentMove={currentMove}
                setCurrentMove={setCurrentMove}
                cards={cards}
                cardIndex={cardIndex}
                setCardIndex={setCardIndex}
              />
            )
          } else return <Stack key={index} />
        })
      )}
    </div>
  )
}

export default Tableau;