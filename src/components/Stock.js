import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Talon from './Talon';
import Waste from './Waste';

const Stock = (props) => {
  const [cards, setCards] = useState([]);
  const [talonIsClicked, setTalonIsClicked] = useState(false);
  const { count, deck } = props;

  useEffect(() => {
    setCards(dealCards(count, deck));
  }, [deck, count]);

  const handleClick = () => {
    setTalonIsClicked(true);
  }
  // console.log(cards);
  return (
    <>
      <Talon handleClick={handleClick} />
      <Waste talonIsClicked={talonIsClicked} />
    </>
  )
}

export default Stock;