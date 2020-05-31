import React, { useState, useEffect, useRef } from 'react';
import { deckBuilder } from '../deckBuilder';
import { solitaire } from '../solitaire';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  const [isOrigin, setIsOrigin] = useState(false);
  const playCards = useRef([]);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const handleClick = event => {
    if (playCards.current.length > 0) {
      let destination;
      if (event.currentTarget.getAttribute('class').includes('foundation' && 'empty')) {
        destination = 'foundation-empty';
      } else {
        if (event.currentTarget.getAttribute('class').includes('tableau' && 'empty')) {
          destination = 'tableau-empty';
        } else {
          if (event.currentTarget.getAttribute('class').includes('foundation')) {
            destination = 'foundation';
          } else {
            if (event.currentTarget.getAttribute('class').includes('tableau')) {
              destination = 'tableau';
            }
          }
        }
      }
      let originCard = playCards.current[0];
      let destinationCard = {
        rank: event.currentTarget.dataset.rank,
        suit: event.currentTarget.dataset.suit
      }
      if (solitaire(destination, originCard, destinationCard)) {
        console.log('heyoo');
        // playCards.current = [];
      } else {
        console.log('narp');
        // playCards.current = [];
      }
    }
  }
  // console.log(playCards.current);
  return (
    <div className="solitaire">
      <Stock count={24} deck={deck} />
      <Foundation handleClick={handleClick} />
      <Foundation handleClick={handleClick} />
      <Foundation handleClick={handleClick} />
      <Foundation handleClick={handleClick} />
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