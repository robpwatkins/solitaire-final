import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';

const Talon = (props) => {
  const { cards } = props;
  
  return (
    <div 
      className={cards.length > 0 ? "talon" : "talon-empty"} 
      onClick={props.handleClick}>
        {/* <div className="card-back"></div> */}
      {cards.length === 0 && (
        <LoopIcon className="loop" style={{fontSize: "10%"}} />
      )}
      
    </div>
  )
}

export default Talon;