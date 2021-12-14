import { createStore } from "vuex";
import CardDetails from "./modules/CardDetails/index";

export default createStore({
  modules: {
    cards: CardDetails,
  },
  state: {},
  mutations: {},
  actions: {},
});
