import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Talon from './Talon';
import Waste from './Waste';

const Stock = (props) => {
  const [/* cards */, setCards] = useState([]);
  const { count, deck } = props;

  useEffect(() => {
    setCards(dealCards(count, deck));
  }, [deck, count]);
  // console.log(cards);
  return (
    <>
      <Talon />
      <Waste />
    </>
  )
}

export default Stock;