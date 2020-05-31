import React, { useState, useEffect, useRef } from 'react';
import { deckBuilder } from '../deckBuilder';
import { solitaire } from '../solitaire';
import { setDestination } from '../setDestination';
import { setRank } from '../setRank';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  // const [isOrigin, setIsOrigin] = useState(false);
  const [originCard, setOriginCard] = useState(null);
  const playCards = useRef([]);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const handleClick = event => {
    if (!originCard) {
      setOriginCard({
        rank: setRank(event.currentTarget.dataset.rank),
        suit: event.currentTarget.dataset.suit
      });
    } else {
      let destination = setDestination(event.currentTarget.getAttribute('class'));
      let destinationCard = {
        rank: setRank(event.currentTarget.dataset.rank),
        suit: event.currentTarget.dataset.suit
      }
      console.log(originCard, destinationCard);
      if (solitaire(destination, originCard, destinationCard)) {
        console.log('heyoo');
        setOriginCard(originCard => originCard = null);
      } else {
        console.log('narp');
        setOriginCard(originCard => originCard = null);
      }
    }
  }
  // console.log(originCard);
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