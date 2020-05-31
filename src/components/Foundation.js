import React, { useState } from 'react';

const Foundation = (props) => {
  const [cards, /* setCards */] = useState([]);
  const { playCards } = props;

  const handleClick = event => {
    props.handleClick(event);
  }

  let fndClass = [
    'foundation',
    // isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  return (
    <div className={fndClass} onClick={handleClick}>
      
    </div>
  )
}

export default Foundation;