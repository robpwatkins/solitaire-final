import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Card from './Card';
import Stack from './Stack';

const Tableau = (props) => {
  const [cards, setCards] = useState([]);
  const [cardPosition, setCardPosition] = useState(null);
  const { count, deck, playCards, handleClick } = props;
  
  useEffect(() => {
    setCards(dealCards(count, deck));
    setCardPosition(cards.length - 1)
  }, [count, deck, cards.length])

  // useEffect(() => {
  //   setCardPosition(cards.length - 1);
  // }, [cards.length]);

  console.log(cards, cardPosition);
  return (
    <div className="tableau">
      {cards.map((card, index) => {
        if (index >= cardPosition) {
          return (
            <Card 
              {...cards[index]} 
              key={index} 
              index={index}
              name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
              handleClick={handleClick}
              playCards={playCards}
              cards={cards}
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