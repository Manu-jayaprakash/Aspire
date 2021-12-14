import AuthenticationMutations from "./mutations";
import AuthenticationGetters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      cardData: [
        {
          id: 1,
          name: "Mark Henry",
          date: "Thru: 12/20",
          number: "3030 3030 3030 3030",
          isFreezed: false,
        },
        {
          id: 2,
          name: "James Smith",
          date: "Thru: 13/20",
          number: "6060 6060 6060 6060",
          isFreezed: false,
        },
        {
          id: 3,
          name: "Jennifer Lawrence",
          date: "Thru: 14/20",
          number: "2020 2020 2020 2020",
          isFreezed: false,
        },
      ],
      activeCardIndex: "",
    };
  },
  mutations: AuthenticationMutations,
  getters: AuthenticationGetters,
};
