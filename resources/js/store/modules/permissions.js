import axios from 'axios';

export default {
  state() {
    return {
      user: '',
    };
  },
  mutations: {
    assignUser(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.user = payload;
    },
  },
  actions: {
    async retrieveCurrentUser({ commit }) {
      const user = await axios.get('api/currentuser');
      commit('assignUser', user.data);
    },
  },
};
