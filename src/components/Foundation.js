import React, { useState } from 'react';

const Foundation = (props) => {
  const [cards, /* setCards */] = useState([]);
  const { handleClick } = props;

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