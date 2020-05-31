import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Card from './Card';
import Stack from './Stack';

const Tableau = (props) => {
  const [cards, setCards] = useState([]);
  const [cardPosition, setCardPosition] = useState(null);
  const { count, deck, playCards } = props;
  
  useEffect(() => {
    setCards(dealCards(count, deck));
    setCardPosition(cards.length - 1)
  }, [count, deck, cards.length])

  const handleClick = () => {
    // if (playCards.current.length > 0 && cards.length === 0) {
    //   playCards.current = [];
    // }
  }

  // console.log(cards, cardPosition);
  return (
    <div className="tableau" onClick={handleClick}>
      {cards.map((card, index) => {
        if (index >= cardPosition) {
          return (
            <Card 
              {...cards[index]} 
              key={index} 
              index={index}
              name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
              handleClick={props.handleClick}
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