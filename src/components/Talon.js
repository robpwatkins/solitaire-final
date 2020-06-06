import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';

const Talon = (props) => {
  const { cards } = props;
  console.log(cards.length);
  return (
    <div 
      className={cards.length > 0 ? "talon" : "talon-empty"} 
      onClick={props.handleClick}>
      {cards.length === 0 && (
        <LoopIcon className="loop" style={{fontSize: "65px"}} />
      )}
      
    </div>
  )
}

export default Talon;