import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

require('./bootstrap');

window.Vue = require('vue').default;

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,
  vuetify,
  el: '#app',
  async created() {
    await store.dispatch('retrieveCurrentUser');
  },
});
