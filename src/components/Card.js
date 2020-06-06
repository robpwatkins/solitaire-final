import React from 'react';
import Suit from './Suit';

const Card = (props) => {
  // const [isOrigin, setIsOrigin] = useState(false);
  // const [originCard, setOriginCard] = useState([]);
  // const [destinationCard, setDestinationCard] = useState(null);
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
    // cardIndex,
    setCardIndex
  } = props;

  const handleClick = event => {
    if (name.includes('tableau')) {
      props.handleClick(event);
      setCardIndex(index);
      // console.log(currentMove);
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
    // (isOrigin && (index >= cardIndex)) && 'origin',
    (name && name.includes('tableau')) && 'tableau',
    (name && name.includes('foundation')) && 'foundation',
    (name && name.includes('top')) && 'top',
    (name && name.includes('bottom')) && 'bottom'
  ];
  cardClass = cardClass.join(' ');
  // console.log(isOrigin);
  return (
    <div 
      className={cardClass}
      value={index} 
      onClick={handleClick}
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