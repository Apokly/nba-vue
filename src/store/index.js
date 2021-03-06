import Vue from "vue";
import Vuex from "vuex";
import games from "./modules/games";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    games: {
      namespaced: true,
      ...games,
    },
  },
});

export default store;
