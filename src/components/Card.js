import React, { useState } from 'react';
import Suit from './Suit';

const Card = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [originCard, setOriginCard] = useState([]);
  const [destinationCard, setDestinationCard] = useState(null);
  const {
    rank,
    suit,
    index,
    name
  } = props;

  // const handleClick = (event, data) => {
  //   if (!isOrigin) {
  //     setOriginCard({
  //       rank: rank,
  //       suit: suit
  //     });
  //     setIsOrigin(true);
  //   } else {
  //     // setDestinationCard({
  //     //   rank: event.currentTarget.dataset.rank,
  //     //   suit: event.currentTarget.dataset.suit
  //     // });
  //   }
  // }
  // console.log(originCard, destinationCard);
  let cardClass = [
    'card',
    ((suit === 'Diamonds') || (suit === 'Hearts')) && 'red',
    // (isOrigin && (index >= cardIndex)) && 'origin',
    (name && name.includes('tableau')) && 'tableau',
    (name && name.includes('top')) && 'top',
    (name && name.includes('bottom')) && 'bottom'
  ];
  
  cardClass = cardClass.join(' ');
  // console.log(rank, suit);
  return (
    <div 
      className={cardClass} 
      value={index} 
      onClick={props.handleClick}
      data-rank={rank}
      data-suit={suit}
    >
      <div className="rank-top">
        <div className="rank-suit">
          <span>{rank}</span>
          <Suit suit={suit} name="lil" />
        </div>
      </div>
        <Suit suit={suit} />
      <div className="rank-bottom">
        <div className="rank-suit">
          <span>{rank}</span>
          <Suit suit={suit} name="lil" />
        </div>
      </div>
    </div>
  )
}

export default Card;