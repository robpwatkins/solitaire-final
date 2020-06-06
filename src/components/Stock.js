import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Talon from './Talon';
import Waste from './Waste';

const Stock = (props) => {
  const [talonCards, setTalonCards] = useState([]);
  const [wasteCards, setWasteCards] = useState([]);
  const { 
    count, 
    deck, 
    currentMove,
    setCurrentMove,
    successfulMove, 
  } = props;

  useEffect(() => {
    setTalonCards(dealCards(count, deck));
  }, [deck, count]);

  const handleClick = () => {
    if (talonCards.length === 0) {
      let newWasteCards = wasteCards.slice();
      newWasteCards.reverse();
      setTalonCards(talonCards => talonCards = newWasteCards);
      setWasteCards(wasteCards => wasteCards = []);
    } else {
      let newTalonCards = talonCards.slice();
      setWasteCards([...wasteCards, newTalonCards.splice(newTalonCards.length - 1, 1)[0]]);
      setTalonCards(talonCards => talonCards = newTalonCards);
    }
  }

  return (
    <>
      <Talon handleClick={handleClick} cards={talonCards} />
      <Waste 
        cards={wasteCards}
        setCards={setWasteCards}
        handleClick={props.handleClick}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
      />
    </>
  )
}

export default Stock;