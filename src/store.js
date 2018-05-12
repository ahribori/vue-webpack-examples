import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    test: {
      a: 3,
      b: {
        c: 7,
      }
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.count += payload.amount;
    },
  },
  actions: {
    incrementAction: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload);
      }, 1000);

    },
  },
  getters: {}
});
