export default {
  state: {
    funds: 10000,
    stocks: []
  },
  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
        // Verifica se já existe ações pra não gerar outro card do mesmo tipo de ação
      const record = state.stocks.find(e => e.id == stockId)
      if (record) {
        record.quantity += quantity
      }
      // Quando está comprando um tipo de ação pela primeira vez
      else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      state.funds -= stockPrice * quantity
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(e => e.id == stockId)
      if (record.quantity > quantity) {
        record.quantity -= quantity
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }
      state.funds += stockPrice * quantity
    },
    setPortfolio (state, portfolio) {
      state.funds = portfolio.funds
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
  },
  actions: {
    sellStock({commit}, order) {
      commit('sellStock', order)
    }
  },
  getters: {
    // O segundo parâmetro getters pega todos os getters da aplicação incluindo
    // o do módulo stocks.js que contém a stocks completa com id, quantity, name e price
    stockPortfolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(e => e.id == stock.id)
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      })
    },
    funds(state) {
        return state.funds
    }
  }
}