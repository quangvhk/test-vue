import * as types from './mutation-types';
const ui = {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    categories: state => state.categories,
  },
  mutations: {
    [types.SET_USER_LIST](state, data) {
      state.categories = data.categories;
    },
  },
  actions: {
    getUserList({ commit }, data) {
      commit('SET_USER_LIST', data)
    },
  }
};

export default ui;
