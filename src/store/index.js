import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {
        titulo: 'Ir ao mercado',
        concluido: false
      },
      {
        titulo: 'Comprar ração',
        concluido: false
      },
      {
        titulo: 'Jogar bola',
        concluido: false
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
