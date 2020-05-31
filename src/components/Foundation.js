import React, { useState } from 'react';

const Foundation = () => {
  const [cards, /* setCards */] = useState([]);

  let fndClass = [
    'foundation',
    // isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  return (
    <div className={fndClass}>
      
    </div>
  )
}

export default Foundation;