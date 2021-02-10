import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f8b195',
        secondary: '#f67280',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
});
