export const setSuitColor = suit => {
  let suitColor;
  if (suit === 'Hearts' || suit === 'Diamonds') {
    return suitColor = 'r';
  } else return suitColor = 'b';
}