import React, { useState, useEffect, useRef } from 'react';
import { deckBuilder } from '../deckBuilder';
import { solitaire } from '../solitaire';
import { setDestination } from '../setDestination';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  // const [isOrigin, setIsOrigin] = useState(false);
  const playCards = useRef([]);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const handleClick = event => {
    if (playCards.current.length > 0) {
      let destination = setDestination(event.currentTarget.getAttribute('class'));
      let originCard = playCards.current[0];
      let destinationCard = {
        rank: event.currentTarget.dataset.rank,
        suit: event.currentTarget.dataset.suit
      }
      if (solitaire(destination, originCard, destinationCard)) {
        console.log('heyoo');
      } else {
        console.log('narp');
      }
    }
  }
  // console.log(playCards.current);
  return (
    <div className="solitaire">
      <Stock count={24} deck={deck} />
      <Foundation playCards={playCards} handleClick={handleClick} />
      <Foundation playCards={playCards} handleClick={handleClick} />
      <Foundation playCards={playCards} handleClick={handleClick} />
      <Foundation playCards={playCards} handleClick={handleClick} />
      <Tableau count={1} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={2} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={3} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={4} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={5} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={6} deck={deck} playCards={playCards} handleClick={handleClick} />
      <Tableau count={7} deck={deck} playCards={playCards} handleClick={handleClick} />
    </div>
  )
}

export default Solitaire;