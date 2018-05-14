<template>
  <div class="coins">
    <h1>Coin</h1>
    <table>
      <thead>
      <tr>
        <th>코인명</th>
        <th>현재가</th>
        <th>등락</th>
        <th>등락율</th>
        <th>시가</th>
        <th>고점</th>
        <th>저점</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(value, key) in coins" :key="key"
          :class="{
          rise: value.tradePrice - value.prevTradePrice > 0,
          fall: value.tradePrice - value.prevTradePrice < 0 }">
        <td>{{filterCoinName(key)}}</td>
        <td :class="{'rise-font': value.change === 'RISE', 'fall-font': value.change === 'FALL',}">{{comma(value.tradePrice)}} 원</td>
        <td :class="{'rise-font': value.change === 'RISE', 'fall-font': value.change === 'FALL',}">{{changeDirection(value.change)}} {{comma(value.changePrice)}} 원</td>
        <td :class="{'rise-font': value.change === 'RISE', 'fall-font': value.change === 'FALL',}">{{Number(value.changeRate * 100).toFixed(2)}}%</td>
        <td>{{comma(value.openingPrice)}} 원</td>
        <td>{{comma(value.highPrice)}} 원</td>
        <td>{{comma(value.lowPrice)}} 원</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import store from "../store";

  export default {
    name: "Coin",
    data() {
      return {
        codes: [
          "CRIX.UPBIT.KRW-BTC",
          "CRIX.UPBIT.KRW-DASH",
          "CRIX.UPBIT.KRW-ETH",
          "CRIX.UPBIT.KRW-NEO",
          "CRIX.UPBIT.KRW-BCC",
          "CRIX.UPBIT.KRW-MTL",
          "CRIX.UPBIT.KRW-LTC",
          "CRIX.UPBIT.KRW-STRAT",
          "CRIX.UPBIT.KRW-XRP",
          "CRIX.UPBIT.KRW-ETC",
          "CRIX.UPBIT.KRW-OMG",
          "CRIX.UPBIT.KRW-SNT",
          "CRIX.UPBIT.KRW-WAVES",
          "CRIX.UPBIT.KRW-PIVX",
          "CRIX.UPBIT.KRW-BTS",
          "CRIX.UPBIT.KRW-XEM",
          "CRIX.UPBIT.KRW-FUN",
          "CRIX.UPBIT.KRW-ZEC",
          "CRIX.UPBIT.KRW-XMR",
          "CRIX.UPBIT.KRW-QTUM",
          "CRIX.UPBIT.KRW-GNT",
          "CRIX.UPBIT.KRW-LSK",
          "CRIX.UPBIT.KRW-STEEM",
          "CRIX.UPBIT.KRW-XLM",
          "CRIX.UPBIT.KRW-ARDR",
          "CRIX.UPBIT.KRW-KMD",
          "CRIX.UPBIT.KRW-ARK",
          "CRIX.UPBIT.KRW-STORJ",
          "CRIX.UPBIT.KRW-GRS",
          "CRIX.UPBIT.KRW-VOX",
          "CRIX.UPBIT.KRW-VTC",
          "CRIX.UPBIT.KRW-REP",
          "CRIX.UPBIT.KRW-1ST",
          "CRIX.UPBIT.KRW-MAID",
          "CRIX.UPBIT.KRW-AGRS",
          "CRIX.UPBIT.KRW-SNGLS",
          "CRIX.UPBIT.KRW-DOPE",
          "CRIX.UPBIT.KRW-DGD",
          "CRIX.UPBIT.KRW-EMC2",
          "CRIX.UPBIT.KRW-XAUR",
          "CRIX.UPBIT.KRW-MYST",
          "CRIX.UPBIT.KRW-TRIG",
          "CRIX.UPBIT.KRW-SAFEX",
          "CRIX.UPBIT.KRW-RISE",
          "CRIX.UPBIT.KRW-ADA",
          "CRIX.UPBIT.KRW-SBD",
          "CRIX.UPBIT.KRW-TIX",
          "CRIX.UPBIT.KRW-POWR",
          "CRIX.UPBIT.KRW-MER",
          "CRIX.UPBIT.KRW-BTG",
          "CRIX.UPBIT.KRW-ICX",
          "CRIX.UPBIT.KRW-EOS",
          "CRIX.UPBIT.KRW-STORM",
          "CRIX.UPBIT.KRW-TRX",
          "CRIX.UPBIT.KRW-MCO",
          "CRIX.UPBIT.KRW-SC",
          "CRIX.UPBIT.KRW-GTO",
          "CRIX.UPBIT.KRW-IGNIS",
          "CRIX.UPBIT.KRW-ONT",
          "CRIX.UPBIT.KRW-DCR",
          "CRIX.UPBIT.KRW-ZIL"
        ],
        isConnected: false
      };
    },
    computed: {
      coins() {
        return store.state.coins;
      }
    },
    methods: {
      changeDirection(change) {
        switch (change) {
          case "RISE": {
            return "↑";
          }
          case "FALL": {
            return "↓";
          }
          default:
            return null;
        }
      },
      filterCoinName(coinName) {
        return coinName.replace('CRIX.UPBIT.', '');
      },
      comma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      connect() {
        this.sock = new WebSocket(
            "wss://crix-websocket.upbit.com/sockjs/376/55bjewyr/websocket"
        );
        this.sock.onopen = () => {
          this.isConnected = true;
        };
        this.sock.onmessage = event => {
          if (event.data === "o") {
            this.sock.send(
                JSON.stringify([
                  JSON.stringify([
                    {ticket: "ram macbook"},
                    {
                      type: "recentCrix",
                      codes: [
                        "CRIX.UPBIT.KRW-BTC",
                        "CRIX.UPBIT.KRW-DASH",
                        "CRIX.UPBIT.KRW-ETH",
                        "CRIX.UPBIT.KRW-NEO",
                        "CRIX.UPBIT.KRW-BCC",
                        "CRIX.UPBIT.KRW-MTL",
                        "CRIX.UPBIT.KRW-LTC",
                        "CRIX.UPBIT.KRW-STRAT",
                        "CRIX.UPBIT.KRW-XRP",
                        "CRIX.UPBIT.KRW-ETC",
                        "CRIX.UPBIT.KRW-OMG",
                        "CRIX.UPBIT.KRW-SNT",
                        "CRIX.UPBIT.KRW-WAVES",
                        "CRIX.UPBIT.KRW-PIVX",
                        "CRIX.UPBIT.KRW-BTS",
                        "CRIX.UPBIT.KRW-XEM",
                        "CRIX.UPBIT.KRW-FUN",
                        "CRIX.UPBIT.KRW-ZEC",
                        "CRIX.UPBIT.KRW-XMR",
                        "CRIX.UPBIT.KRW-QTUM",
                        "CRIX.UPBIT.KRW-GNT",
                        "CRIX.UPBIT.KRW-LSK",
                        "CRIX.UPBIT.KRW-STEEM",
                        "CRIX.UPBIT.KRW-XLM",
                        "CRIX.UPBIT.KRW-ARDR",
                        "CRIX.UPBIT.KRW-KMD",
                        "CRIX.UPBIT.KRW-ARK",
                        "CRIX.UPBIT.KRW-STORJ",
                        "CRIX.UPBIT.KRW-GRS",
                        "CRIX.UPBIT.KRW-VOX",
                        "CRIX.UPBIT.KRW-VTC",
                        "CRIX.UPBIT.KRW-REP",
                        "CRIX.UPBIT.KRW-1ST",
                        "CRIX.UPBIT.KRW-MAID",
                        "CRIX.UPBIT.KRW-AGRS",
                        "CRIX.UPBIT.KRW-SNGLS",
                        "CRIX.UPBIT.KRW-DOPE",
                        "CRIX.UPBIT.KRW-DGD",
                        "CRIX.UPBIT.KRW-EMC2",
                        "CRIX.UPBIT.KRW-XAUR",
                        "CRIX.UPBIT.KRW-MYST",
                        "CRIX.UPBIT.KRW-TRIG",
                        "CRIX.UPBIT.KRW-SAFEX",
                        "CRIX.UPBIT.KRW-RISE",
                        "CRIX.UPBIT.KRW-ADA",
                        "CRIX.UPBIT.KRW-SBD",
                        "CRIX.UPBIT.KRW-TIX",
                        "CRIX.UPBIT.KRW-POWR",
                        "CRIX.UPBIT.KRW-MER",
                        "CRIX.UPBIT.KRW-BTG",
                        "CRIX.UPBIT.KRW-ICX",
                        "CRIX.UPBIT.KRW-EOS",
                        "CRIX.UPBIT.KRW-STORM",
                        "CRIX.UPBIT.KRW-TRX",
                        "CRIX.UPBIT.KRW-MCO",
                        "CRIX.UPBIT.KRW-SC",
                        "CRIX.UPBIT.KRW-GTO",
                        "CRIX.UPBIT.KRW-IGNIS",
                        "CRIX.UPBIT.KRW-ONT",
                        "CRIX.UPBIT.KRW-DCR",
                        "CRIX.UPBIT.KRW-ZIL"
                      ]
                    }
                  ])
                ])
            );
          } else {
            if (event.data.startsWith("a")) {
              try {
                const api = JSON.parse(
                    JSON.parse(event.data.slice(1, event.data.length))[0]
                );
                store.commit("setCoinInfo", {
                  coinName: api.code,
                  data: api
                });
              } catch (e) {
                e;
              }
            }
          }
        };
      },
      disconnect() {
        this.sock.close();
      }
    },
    created() {
      this.connect();
    },
    destroyed() {
      this.isConnected = false;
      this.disconnect();
    }
  };
</script>

<style scoped>
  table {
    text-align: left;
    width: 100%;
  }

  .coins .coin {
    text-align: left;
  }

  .rise {
    animation: rise 0.5s;
  }

  .fall {
    animation: fall 0.5s;
  }

  .rise-font {
    color: red;
  }

  .fall-font {
    color: blue;
  }

  @keyframes rise {
    0% {
      bacground-color: rgba(0, 0, 255, 0);
    }
    50% {
      background-color: rgba(0, 0, 255, 0.1);
    }
    100% {
      bacground-color: rgba(0, 0, 255, 0);
    }
  }

  @keyframes fall {
    0% {
      bacground-color: rgba(255, 0, 0, 0);
    }
    50% {
      background-color: rgba(255, 0, 0, 0.1);
    }
    100% {
      bacground-color: rgba(255, 0, 0, 0);
    }
  }
</style>
