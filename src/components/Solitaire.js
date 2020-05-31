import React, { useState, useEffect, useRef } from 'react';
import { deckBuilder } from '../deckBuilder';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const _originCard = useRef(null);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])


  const handleClick = event => {
    if (!_originCard.current) {
      _originCard.current = {
        rank: event.currentTarget.dataset.rank,
        suit: event.currentTarget.dataset.suit
      };
    } else {
      let destinationCard = {
        rank: event.currentTarget.dataset.rank,
        suit: event.currentTarget.dataset.suit
      }
      console.log(_originCard.current, destinationCard);
    }
  }
  // console.log(_originCard);
  return (
    <div className="solitaire">
      <Stock count={24} deck={deck} />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau count={1} deck={deck} handleClick={handleClick} />
      <Tableau count={2} deck={deck} handleClick={handleClick} />
      <Tableau count={3} deck={deck} handleClick={handleClick} />
      <Tableau count={4} deck={deck} handleClick={handleClick} />
      <Tableau count={5} deck={deck} handleClick={handleClick} />
      <Tableau count={6} deck={deck} handleClick={handleClick} />
      <Tableau count={7} deck={deck} handleClick={handleClick} />
    </div>
  )
}

export default Solitaire;