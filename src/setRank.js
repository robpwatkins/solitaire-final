export const setRank = rank => {
  if (parseInt(rank)) {
    return Number(rank);
  } else {
    return rank;
  }
}