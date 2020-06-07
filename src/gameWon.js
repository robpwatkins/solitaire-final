export const gameWon = cards => {
  for (let i = cards.length; i > 0; i--) {
    cards.splice(cards.length - 1);
  }
}