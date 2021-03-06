import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// const vueAwesomeCountdown = require('vue-awesome-countdown');
import vueAwesomeCountdown from 'vue-awesome-countdown';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(vueAwesomeCountdown);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
