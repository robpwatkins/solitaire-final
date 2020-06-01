import React, { useState, useEffect } from 'react';
import { dealCards } from '../dealCards';
import Card from './Card';
import Stack from './Stack';

const Tableau = (props) => {
  const [cards, setCards] = useState([]);
  const [cardPosition, setCardPosition] = useState(null);
  const [cardIndex, setCardIndex] = useState(null);
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const { count, deck, playCards, setPlayCards } = props;
  
  useEffect(() => {
    setCards(dealCards(count, deck));
    setCardPosition(cards.length - 1)
  }, [count, deck, cards.length])

  const handleClick = () => {
    // if (!isOrigin) {
    //   setIsOrigin(true);
    // } else {
    //   setIsOrigin(false);
    // }
  }

  // console.log(cards, cardPosition);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      onClick={handleClick}
    >
      {cards.length > 0 && (
        cards.map((card, index) => {
          if (index >= cardPosition) {
            return (
              <Card 
                {...cards[index]} 
                key={index} 
                index={index}
                name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
                handleClick={props.handleClick}
                isOrigin={isOrigin}
                setIsOrigin={setIsOrigin}
                setIsDestination={setIsDestination}
                playCards={playCards}
                setPlayCards={setPlayCards}
                cards={cards}
                cardIndex={cardIndex}
                setCardIndex={setCardIndex}
              />
            )
          } else return <Stack key={index} />
        })
      )}
    </div>
  )
}

export default Tableau;