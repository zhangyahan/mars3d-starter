import Vue from 'vue'
import Vuex from 'vuex'

import createVuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [createVuexAlong()],
  modules: {},
})
