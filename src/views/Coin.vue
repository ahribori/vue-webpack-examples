<template>
  <div class="coins">
    <v-container grid-list-md text-xs-center v-if="!pending">
      <v-layout row wrap>
        <v-flex v-for="(value, key) in coins" :key="key" xs12 sm6 md4 lg3 xl2>
          <CoinCard :data="value"></CoinCard>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import store from "../store";
  import CoinCard from '../components/CoinCard';

  export default {
    name: "Coin",
    data() {
      return {
        pending: true,
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
                if (this.pending) {
                  this.pending = false;
                }
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
    },
    components: {
      CoinCard,
    }
  };
</script>

<style scoped>

</style>
