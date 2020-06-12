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
        ? <img key="Spades" src={Spades} alt="" />
        : [
          suit === 'Clubs'
          ? <img key="Clubs" src={Clubs} alt="" />
          : [
            suit === 'Diamonds'
            ? <img key="Diamonds" src={Diamonds} alt="" />
            : <img key="Hearts" src={Hearts} alt="" />
          ]
        ]
      }
  </>
  )
}

export default Suit;