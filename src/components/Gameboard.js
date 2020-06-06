import React, { useState, useEffect } from 'react';
import { deckBuilder } from '../deckBuilder';
import { solitaire } from '../solitaire';
import { setDestination } from '../setDestination';
import { setRank } from '../setRank';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = () => {
  const [deck, setDeck] = useState([]);
  const [originCard, setOriginCard] = useState([]);
  const [currentMove, setCurrentMove] = useState([]);
  const [successfulMove, setSuccessfulMove] = useState([]);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const handleClick = event => {
    if (currentMove.length === 0) {
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
      if (solitaire(destination, originCard, destinationCard)) {
        setSuccessfulMove(successfulMove => successfulMove = currentMove);
      } else {
        setCurrentMove(currentMove => currentMove = []);
      }
    }
  }

  return (
    <div className="gameboard">
      <Stock 
        count={24} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        handleClick={handleClick} 
      />
      <Foundation 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Foundation 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Foundation 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Foundation 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={1} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={2} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={3} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={4} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={5} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={6} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
      <Tableau 
        count={7} 
        deck={deck} 
        currentMove={currentMove} 
        setCurrentMove={setCurrentMove}
        successfulMove={successfulMove}
        setSuccessfulMove={setSuccessfulMove} 
        handleClick={handleClick} 
      />
    </div>
  )
}

export default Solitaire;