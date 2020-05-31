import { setSuitColor } from './setSuitColor';

export const solitaire = (destination, originCard, destinationCard) => {
  if (destination === 'foundation-empty') {
    if (originCard.rank === 'A') {
      return true
    } else return false;
  }
  if (destination === 'tableau-empty') {
    if (originCard.rank === 'K') {
      return true;
    } else return false;
  }
  if (destination === 'foundation') {
    if (originCard.rank === destinationCard.rank + 1) {
      if (originCard.suit === destinationCard.suit) {
        return true;
      } else return false;
    } else return false;
  }
  if (destination === 'tableau') {
    if (originCard.rank === destinationCard.rank - 1) {
      if (setSuitColor(originCard.suit) !== setSuitColor(destinationCard.suit)) {
        return true
      } else return false;
    } else return false;
  }
}