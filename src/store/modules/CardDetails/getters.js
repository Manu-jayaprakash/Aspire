export default {
  getCardData(state) {
    return state.cardData;
  },
  getActiveCardIndex(state) {
    return state.activeCardIndex;
  },
  getFreezedCardIndex(state) {
    const result = state.cardData.reduce((acc, curr, i) => {
      if (curr.isFreezed === true) acc.push(i);
      return acc;
    }, []);
    return result;
  },
};
