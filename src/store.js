import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    coins: {
      "CRIX.UPBIT.KRW-BTC": {},
      "CRIX.UPBIT.KRW-DASH": {},
      "CRIX.UPBIT.KRW-ETH": {},
      "CRIX.UPBIT.KRW-NEO": {},
      "CRIX.UPBIT.KRW-BCC": {},
      "CRIX.UPBIT.KRW-MTL": {},
      "CRIX.UPBIT.KRW-LTC": {},
      "CRIX.UPBIT.KRW-STRAT": {},
      "CRIX.UPBIT.KRW-XRP": {},
      "CRIX.UPBIT.KRW-ETC": {},
      "CRIX.UPBIT.KRW-OMG": {},
      "CRIX.UPBIT.KRW-SNT": {},
      "CRIX.UPBIT.KRW-WAVES": {},
      "CRIX.UPBIT.KRW-PIVX": {},
      "CRIX.UPBIT.KRW-BTS": {},
      "CRIX.UPBIT.KRW-XEM": {},
      "CRIX.UPBIT.KRW-FUN": {},
      "CRIX.UPBIT.KRW-ZEC": {},
      "CRIX.UPBIT.KRW-XMR": {},
      "CRIX.UPBIT.KRW-QTUM": {},
      "CRIX.UPBIT.KRW-GNT": {},
      "CRIX.UPBIT.KRW-LSK": {},
      "CRIX.UPBIT.KRW-STEEM": {},
      "CRIX.UPBIT.KRW-XLM": {},
      "CRIX.UPBIT.KRW-ARDR": {},
      "CRIX.UPBIT.KRW-KMD": {},
      "CRIX.UPBIT.KRW-ARK": {},
      "CRIX.UPBIT.KRW-STORJ": {},
      "CRIX.UPBIT.KRW-GRS": {},
      "CRIX.UPBIT.KRW-VOX": {},
      "CRIX.UPBIT.KRW-VTC": {},
      "CRIX.UPBIT.KRW-REP": {},
      "CRIX.UPBIT.KRW-1ST": {},
      "CRIX.UPBIT.KRW-MAID": {},
      "CRIX.UPBIT.KRW-AGRS": {},
      "CRIX.UPBIT.KRW-SNGLS": {},
      "CRIX.UPBIT.KRW-DOPE": {},
      "CRIX.UPBIT.KRW-DGD": {},
      "CRIX.UPBIT.KRW-EMC2": {},
      "CRIX.UPBIT.KRW-XAUR": {},
      "CRIX.UPBIT.KRW-MYST": {},
      "CRIX.UPBIT.KRW-TRIG": {},
      "CRIX.UPBIT.KRW-SAFEX": {},
      "CRIX.UPBIT.KRW-RISE": {},
      "CRIX.UPBIT.KRW-ADA": {},
      "CRIX.UPBIT.KRW-SBD": {},
      "CRIX.UPBIT.KRW-TIX": {},
      "CRIX.UPBIT.KRW-POWR": {},
      "CRIX.UPBIT.KRW-MER": {},
      "CRIX.UPBIT.KRW-BTG": {},
      "CRIX.UPBIT.KRW-ICX": {},
      "CRIX.UPBIT.KRW-EOS": {},
      "CRIX.UPBIT.KRW-STORM": {},
      "CRIX.UPBIT.KRW-TRX": {},
      "CRIX.UPBIT.KRW-MCO": {},
      "CRIX.UPBIT.KRW-SC": {},
      "CRIX.UPBIT.KRW-GTO": {},
      "CRIX.UPBIT.KRW-IGNIS": {},
      "CRIX.UPBIT.KRW-ONT": {},
      "CRIX.UPBIT.KRW-DCR": {},
      "CRIX.UPBIT.KRW-ZIL": {}
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.count += payload.amount;
    },
    setCoinInfo: (state, payload) => {
      const prevTradePrice = state.coins[payload.coinName].tradePrice;
      state.coins[payload.coinName] = payload.data;
      state.coins[payload.coinName].prevTradePrice = prevTradePrice;
    }
  },
  actions: {
    incrementAction: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload);
      }, 1000);
    }
  }
});
