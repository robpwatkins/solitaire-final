import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  
  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const deckBuilder = () => {
    let buildDeck = [];
    let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
    let ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    for (let i = 0; i < suits.length; i++) {
      let card = {};
      let suit;
      suit = suits[i];
      for (let j = 0; j < ranks.length; j++) {
        card = {};
        card.rank = ranks[j];
        card.suit = suit;
        buildDeck.push(card);
      }
    }
    return buildDeck;
  }

  const dealCards = count => {
    let tempCards = [];
    for (let i = 0; i < count; i++) {
      tempCards.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
    }
    return tempCards;
  }
  // console.log(deck);
  return (
    <div className="solitaire">
      <Stock cards={() => dealCards(24)} />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau cards={() => dealCards(1)} />
      <Tableau cards={() => dealCards(2)} />
      <Tableau cards={() => dealCards(3)} />
      <Tableau cards={() => dealCards(4)} />
      <Tableau cards={() => dealCards(5)} />
      <Tableau cards={() => dealCards(6)} />
      <Tableau cards={() => dealCards(7)} />
    </div>
  )
}

export default Solitaire;