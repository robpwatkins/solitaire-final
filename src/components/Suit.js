import React from 'react';
import Spades from '../img/Spades.png';
import Clubs from '../img/Clubs.png';
import Diamonds from '../img/Diamonds.png';
import Hearts from '../img/Heartsss.png';

const Suit = ({ suit, name }) => {
  return (
    <>
      {
        suit === 'Spades'
        ? <img key="Spades" src={Spades} alt="" className={name === "lil" ? name : ''} />
        : [
          suit === 'Clubs'
          ? <img key="Clubs" src={Clubs} alt="" className={name === "lil" ? name : ''} />
          : [
            suit === 'Diamonds'
            ? <img key="Diamonds" src={Diamonds} alt="" className={name === "lil" ? name : ''} />
            : <img key="Hearts" src={Hearts} alt="" className={name === "lil" ? name : ''} />
          ]
        ]
      }
  </>
  )
}

export default Suit;