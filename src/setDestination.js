export const setDestination = target => {
  if (target.includes('foundation' && 'empty')) {
    target = 'foundation-empty';
  } else {
    if (target.includes('tableau' && 'empty')) {
      target = 'tableau-empty';
    } else {
      if (target.includes('foundation')) {
        target = 'foundation';
      } else {
        if (target.includes('tableau')) {
          target = 'tableau';
        }
      }
    }
  }
  return target;
}