// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import Vuex from 'vuex';
import permissions from './modules/permissions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { permissions },
  state: {},
  mutations: {},
  actions: {},
});
