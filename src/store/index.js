import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const practiceItemsStorage = 'practice_items';

export default new Vuex.Store({
  state: {
    practiceItems: JSON.parse(localStorage.getItem(practiceItemsStorage)) || []
  },
  mutations: {
    addPracticeItem(state, practiceItem) {
      state.practiceItems.push(practiceItem);
      localStorage.setItem(practiceItemsStorage, JSON.stringify(state.practiceItems));
    },
    deletePracticeItem(state, index) {
      state.practiceItems.splice(index, 1);
      localStorage.setItem(practiceItemsStorage, JSON.stringify(state.practiceItems));
    }
  },
  actions: {},
  modules: {}
});
