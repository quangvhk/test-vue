import * as types from './mutation-types';
import { snakeCase } from 'lodash';

const ui = {
  namespaced: true,
  state: {
    users: [
      {
        id: 1,
        name: 'Mr. A',
        username: 'mra',
        skills: [
          {
            id: 1,
            title: 'React',
            level: 90
          }
        ]
      }
    ],
  },
  getters: {
    users: state => state.users,
  },
  mutations: {
    [types.ADD_USER](state, data) {
      const id = Date.now();
      state.users.unshift({
        id: id,
        name: data,
        username: `${snakeCase(data)}-${id}`,
        skills: [],
      })
    },
    [types.ADD_SKILL](state, data) {
      const idx = state.users.findIndex(u => u.id === data.userId);
      if (idx !== -1) {
        const tmp = { ...state.users[idx] };
        tmp.skills.unshift({
          id: Date.now(),
          title: data.title,
          level: data.level
        });
        state.users[idx] = tmp;
      }
    },
    [types.SAVE_SKILL](state, data) {
      const idx = state.users.findIndex(u => u.id === data.userId);
      if (idx !== -1) {
        const tmp = { ...state.users[idx] };
        const skill = data.skill;
        const sIdx = tmp.skills.findIndex(s => s.id === skill.id);
        tmp.skills[sIdx] = {...skill};
        state.users[idx] = tmp;
      }
    },
    [types.REMOVE_SKILL](state, data) {
      const idx = state.users.findIndex(u => u.id === data.userId);
      if (idx !== -1) {
        const skillIdx = state.users[idx].skills.findIndex(s => s.id === data.skillId);
        const tmp = { ...state.users[idx] };
        tmp.skills.splice(skillIdx, 1);
        state.user[idx] = tmp;
      }
    },
  },
  actions: {
    addUser({ commit }, data) {
      commit('ADD_USER', data)
    },
    getUser({ state }) {
      return state.user;
    },
    addSkill({ commit }, data) {
      commit('ADD_SKILL', data)
    },
    saveSkill({ commit }, data) {
      commit('SAVE_SKILL', data)
    },
    removeSkill({ commit }, data) {
      commit('REMOVE_SKILL', data)
    }
  }
};

export default ui;
