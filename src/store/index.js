import { createStore } from 'vuex'

export default createStore({
  state: {
    pitcherList: [],
  },
  getters: {
    pitchers: (state) => {
      return state.pitcherList;
    },
    pitcher: (state) => (id) => {
      return state.pitcherList.find((pitcher) => pitcher.playerid === id);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})