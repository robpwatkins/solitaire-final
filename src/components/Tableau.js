import React, { useState, useEffect } from 'react';
import Card from './Card';
import Stack from './Stack';

const Tableau = (props) => {
  const [cards, setCards] = useState([]);
  const [cardPosition, setCardPosition] = useState(null);

  useEffect(() => {
    setCards(props.cards());
    setCardPosition(cards.length - 1);
  }, [props, cards.length])
  // console.log(cardPosition);
  return (
    <div className="tableau">
      {cards.map((card, index) => {
        if (index >= cardPosition) {
          return (
            <Card 
              {...cards[index]} 
              key={index} 
              name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
            />
          )
        } else {
          return (
            <Stack key={index} />
          )
        }
      })

      }
    </div>
  )
}

export default Tableau;