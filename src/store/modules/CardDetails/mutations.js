export default {
  setCardData(state, payload) {
    state.cardData = payload.value;
  },
  setActiveCardIndex(state, payload) {
    state.activeCardIndex = payload.value;
  },
  toggleCardFreeze(state, payload) {
    state.cardData[payload.index].isFreezed =
      !state.cardData[payload.index].isFreezed;
  },
  cancelCard(state, payload) {
    state.cardData.splice(payload.index, 1);
  },
  addNewCard(state, payload) {
    const options = { weekday: "short", month: "numeric", day: "numeric" };
    const result = new Intl.DateTimeFormat("en-GB", options).format(new Date());
    state.cardData.unshift({
      id: Math.floor(Math.random() * 1000),
      name: payload.name,
      date: result.replace(",", ":"),
      number:
        (Math.random() + " ").substring(2, 6) +
        " " +
        (Math.random() + " ").substring(2, 6) +
        " " +
        (Math.random() + " ").substring(2, 6) +
        " " +
        (Math.random() + " ").substring(2, 6),
      isFreezed: false,
    });
  },
};
