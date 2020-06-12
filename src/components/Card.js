import React from 'react';
import Suit from './Suit';

const Card = (props) => {
  const {
    rank,
    suit,
    index,
    name,
    cards,
    isOrigin,
    setIsOrigin,
    setIsDestination,
    currentMove,
    setCurrentMove,
    cardIndex,
    setCardIndex,
    isShooting,
    hasBeenWon
  } = props;

  const handleClick = event => {
    if (name.includes('foundation') || name.includes('waste')) {
      props.handleClick(event);
    };
    if (name.includes('tableau')) {
      props.handleClick(event);
      setCardIndex(index);
      if (currentMove.length === 0) {
        setIsOrigin(true);
        let newCards = cards.slice();
        setCurrentMove(newCards.splice(index));
      } else 
        if (!isOrigin) {
        setIsDestination(true);
      } else {
        setIsOrigin(false);
        setCurrentMove([]);
      }
    }
  }

  let cardClass = [
    'card',
    ((suit === 'Diamonds') || (suit === 'Hearts')) && 'red',
    (isOrigin && (index >= cardIndex)) && 'origin',
    (name && name.includes('tableau')) && 'tableau',
    (name && name.includes('foundation')) && 'foundation',
    (name && name.includes('top')) && 'top',
    (name && name.includes('bottom')) && 'bottom',
    name === 'foundation-win' && 'foundation-win'
    // hasBeenWon && 'shooting'
  ];
  cardClass = cardClass.join(' ');
  return (
    <div 
      className={cardClass}
      value={index} 
      onClick={handleClick}
      data-rank={rank}
      data-suit={suit}
    >
      <div className={((suit === 'Diamonds') || (suit === 'Hearts')) ? "card-face red" : "card-face"}>
        <div className="rank-top">
          <span>{rank}</span>
        </div>
          <Suit suit={suit} />
        <div className="rank-bottom">
          <span>{rank}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;