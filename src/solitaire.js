export const solitaire = (destination, originCard, destinationCard) => {
  if (destination === 'foundation-empty') {
    if (originCard.rank === 'A') return true;
    else return false;
  }
  if (destination === 'tableau-empty') {
    if (originCard.rank === 'K') return true;
    else return false;
  }
  if (destination === 'foundation') {
    if (originCard.rank === destinationCard.rank + 1) {
      let originColor, destinationColor;
      if (originCard.suit === 'Hearts' || originCard.suit === 'Diamonds') {
        originColor = 'r';
      } else originColor = 'b';
      if (destinationCard.suit === 'Hearts' || destinationCard.suit === 'Diamonds') {
        destinationColor = 'r';
      } else destinationColor = 'b';
      if (originColor === destinationColor) return true;
      else return false;
    } else return false;
  }
  if (destination === 'tableau') {
    if (originCard.rank === destinationCard.rank - 1) {
      let originColor, destinationColor;
      if (originCard.suit === 'Hearts' || originCard.suit === 'Diamonds') {
        originColor = 'r';
      } else originColor = 'b';
      if (destinationCard.suit === 'Hearts' || destinationCard.suit === 'Diamonds') {
        destinationColor = 'r';
      } else destinationColor = 'b';
      if (originColor !== destinationColor) return true;
      else return false;
    } else return false;
  }
}