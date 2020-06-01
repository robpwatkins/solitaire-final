export const setSuitColor = suit => {
  let suitColor;
  if (suit === 'Hearts' || suit === 'Diamonds') suitColor = 'r';
  else suitColor = 'b';
  return suitColor;
}