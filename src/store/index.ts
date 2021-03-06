import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const practiceItemsStorage = 'practice_items';

interface StoreTypes {
  // state: {
  //   practiceItems: any,
  //   playing: boolean,
  //   practiceItemIndex: number
  // },
  // mutations: {
  //   addPracticeItem: () => void;
  // }

  practiceItems: any;
  playing: boolean;
  practiceItemIndex: number;
}

export default new Vuex.Store<StoreTypes>({
  state: {
    practiceItems: JSON.parse(localStorage.getItem(practiceItemsStorage) as string),
    playing: false,
    practiceItemIndex: 0
  },
  mutations: {
    addPracticeItem(state, practiceItem) {
      state.practiceItems.push(practiceItem);
      localStorage.setItem(practiceItemsStorage, JSON.stringify(state.practiceItems));
    },
    deletePracticeItem(state, index) {
      state.practiceItems.splice(index, 1);
      localStorage.setItem(practiceItemsStorage, JSON.stringify(state.practiceItems));
    },
    setPlaying(state) {
      state.playing = !state.playing;
    },
    setPracticeItemIndex(state, increment) {
      increment ? state.practiceItemIndex++ : state.practiceItemIndex--;
    }
  },
  actions: {},
  modules: {}
});
