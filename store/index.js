import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: "Hello Vuex",
      };
    },
    mutations: {
      updateMessage: function (state) {
        let message = state.message === "Updated" ? "Hello Vuex" : "Updated";
        state.message = message;
      },
    },
  });
};
export default createStore;
