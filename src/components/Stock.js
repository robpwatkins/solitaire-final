import React, { useState, useEffect } from 'react';
import Talon from './Talon';
import Waste from './Waste';

const Stock = (props) => {
  const [/* cards */, setCards] = useState([]);

  useEffect(() => {
    setCards(props.cards());
  }, [props])
  // console.log(cards);
  return (
    <>
      <Talon />
      <Waste />
    </>
  )
}

export default Stock;