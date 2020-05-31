import React from 'react';
import Suit from './Suit';

const Card = (props) => {

  let cardClass = [
    'card',
    ((props.suit === 'Diamonds') || (props.suit === 'Hearts')) && 'red',
    // (props.isOrigin && (props.index >= props.cardIndex)) && 'origin',
    (props.name && props.name.includes('tableau')) && 'tableau',
    (props.name && props.name.includes('top')) && 'top',
    (props.name && props.name.includes('bottom')) && 'bottom'
  ];
  
  cardClass = cardClass.join(' ');
  // console.log(props.rank, props.suit);
  return (
    <div className={cardClass} /* value={props.index} */ /* onClick={handleClick} */>
      <div className="rank-top">
        <div className="rank-suit">
          <span>{props.rank}</span>
          <Suit suit={props.suit} name="lil" />
        </div>
      </div>
        <Suit suit={props.suit} />
      <div className="rank-bottom">
        <div className="rank-suit">
          <span>{props.rank}</span>
          <Suit suit={props.suit} name="lil" />
        </div>
      </div>
    </div>
  )
}

export default Card;