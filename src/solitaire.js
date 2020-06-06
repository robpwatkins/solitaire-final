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
    console.log(originCard.rank, destinationCard);
    if ((originCard.rank === 2 && destinationCard.rank === 'A') ||
        (originCard.rank === 'J' && destinationCard.rank === 10) ||
        (originCard.rank === 'Q' && destinationCard.rank === 'J') ||
        (originCard.rank === 'K' && destinationCard.rank === 'Q') ||
        (originCard.rank === destinationCard.rank + 1)) {
      if (originCard.suit === destinationCard.suit) {
        return true;
      } else return false;
    } else return false;
  }
  if (destination === 'tableau') {
    if ((originCard.rank === 10 && destinationCard.rank === 'J') ||
    (originCard.rank === 'J' && destinationCard.rank === 'Q') ||
    (originCard.rank === 'Q' && destinationCard.rank === 'K') || 
    (originCard.rank === destinationCard.rank - 1)) {
      if (setSuitColor(originCard.suit) !== setSuitColor(destinationCard.suit)) {
        return true
      } else return false;
    } else return false;
  }
}