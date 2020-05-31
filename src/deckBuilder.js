export const deckBuilder = () => {
  let buildDeck = [];
  let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
  let ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  for (let i = 0; i < suits.length; i++) {
    let suit = suits[i];
    for (let j = 0; j < ranks.length; j++) {
      let card = {
        rank: ranks[j],
        suit: suit
      };
      buildDeck.push(card);
    }
  }
  return buildDeck;
}