export const dealCards = (count, deck) => {
  let hand = [];
  for (let i = 0; i < count; i++) {
    hand.push(deck.splice(/* Math.floor(Math.random() * deck.length), 1 */0, 1)[0]);
  }
  return hand;
}