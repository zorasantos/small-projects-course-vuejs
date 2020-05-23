import stocks from '@/data/dataStocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    buyStock({ commit }, order) {
      commit('buyStock', order)
    },
    initStocks({ commit }) {
        console.log('initStocks...')
      commit('setStocks', stocks)
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }

}