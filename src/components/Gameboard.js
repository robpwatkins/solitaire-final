import React, { useState, useEffect } from 'react';
import { deckBuilder } from '../deckBuilder';
import { solitaire } from '../solitaire';
import { setDestination } from '../setDestination';
import { setRank } from '../setRank';
import Stock from './Stock';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = (props) => {
  const [deck, setDeck] = useState([]);
  const [originCard, setOriginCard] = useState([]);
  const [currentMove, setCurrentMove] = useState([]);
  const [successfulMove, setSuccessfulMove] = useState([]);

  useEffect(() => {
    setDeck(deck => deck = deckBuilder());
  }, [])

  const handleClick = event => {
    // console.log('Gameboard', event.currentTarget);
    if (originCard.length === 0) {
      setOriginCard({
        rank: setRank(event.currentTarget.dataset.rank),
        suit: event.currentTarget.dataset.suit
      });
    } else {
      let destination = setDestination(event.currentTarget.getAttribute('class'));
      console.log(destination);
      let destinationCard = {
        rank: setRank(event.currentTarget.dataset.rank),
        suit: event.currentTarget.dataset.suit
      }
      if (solitaire(destination, originCard, destinationCard)) {
        console.log('heyoo');
        setSuccessfulMove(successfulMove => successfulMove = currentMove);
        // setOriginCard(originCard => originCard = []);
      } else {
        console.log('narp');
        setCurrentMove(currentMove => currentMove = []);
        setOriginCard(originCard => originCard = []);
        setCurrentMove([]);
      }
    }
  }
  // console.log(currentMove, originCard);
  return (
    <div className="gameboard">
      <Stock 
        count={24} 
        deck={deck} 
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