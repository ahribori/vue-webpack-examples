<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{filterCoinName(data.code)}}</h3>
        <Candle
                class="align-end"
                :highPrice="data.highPrice"
                :lowPrice="data.lowPrice"
                :openingPrice="data.openingPrice"
                :currentPrice="data.tradePrice"
                :direction="data.change"
        ></Candle>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile :class="{
        'rise-font': data.change === 'RISE',
        'fall-font': data.change === 'FALL',
        'rise': data.tradePrice - data.prevTradePrice > 0,
        'fall': data.tradePrice - data.prevTradePrice < 0 }"
        >
          <v-list-tile-content><h3>{{comma(data.tradePrice)}} 원</h3></v-list-tile-content>
          <v-list-tile-content class="align-end">{{changeDirection(data.change)}}{{comma(data.changePrice)}}원
            ({{Number(data.changeRate * 100).toFixed(2)}}%)
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>시작가</v-list-tile-content>
          <v-list-tile-content class="align-end">{{comma(data.openingPrice)}} 원</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>고가</v-list-tile-content>
          <v-list-tile-content class="align-end">{{comma(data.highPrice)}} 원</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>저가</v-list-tile-content>
          <v-list-tile-content class="align-end">{{comma(data.lowPrice)}} 원</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import Candle from './Candle';

  export default {
    name: "CoinCard",
    props: {
      data: Object,
    },
    methods: {
      filterCoinName(coinName) {
        if (!coinName) {
          return;
        }
        return coinName.replace('CRIX.UPBIT.KRW-', '');
      },
      comma(x) {
        if (!x) {
          return null;
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
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
    },
    components: {
      Candle,
    }
  }
</script>

<style scoped>
  .rise {
    animation: rise 1s;
  }

  .fall {
    animation: fall 1s;
  }

  .rise-font {
    color: red;
  }

  .fall-font {
    color: darkblue;
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