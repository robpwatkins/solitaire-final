export const shuffleDeck = deck => {
  let i = 0;
  let j = 0;
  let temp = null;
  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}