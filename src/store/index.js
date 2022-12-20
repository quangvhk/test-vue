import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import skill from './skill'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    skill
  }
})
