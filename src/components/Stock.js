import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Talon from './Talon';
import Waste from './Waste';

const Stock = (props) => {
  const [cards, setCards] = useState([]);
  const [talonIsClicked, setTalonIsClicked] = useState(false);
  const [flipCard, setFlipCard] = useState(null);
  const { 
    count, 
    deck, 
    currentMove,
    setCurrentMove,
    successfulMove, 
    setSuccessfulMove 
  } = props;

  useEffect(() => {
    setCards(dealCards(count, deck));
  }, [deck, count]);

  const handleClick = () => {
    setTalonIsClicked(true);
    if (cards.length === 0) {

    }
  }
  // console.log(cards, flipCard);
  return (
    <>
      <Talon handleClick={handleClick} cards={cards} />
      <Waste 
        talonIsClicked={talonIsClicked} 
        talonCards={cards} 
        setTalonCards={setCards} 
        setTalonIsClicked={setTalonIsClicked}
        handleClick={props.handleClick}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove}
      />
    </>
  )
}

export default Stock;