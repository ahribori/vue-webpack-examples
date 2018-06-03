<template>
  <v-card>
    <div id="container"></div>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import Highcharts from 'highcharts/highstock';
  import mockData from './mockData.json';

  export default {
    name: "Chart",
    props: {
      coinType: String,
    },
    methods: {
      initializeChart: function (data) {
        this.chart = Highcharts.stockChart('container', {
          rangeSelector: {
            selected: 1
          },

          title: {
            text: 'AAPL Stock Price'
          },

          series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            data: data,
          }]
        })
      },
      clearChart: function () {
        if (this.chart) {
          this.chart.destroy();
        }
      },
      fetchData: function(coinType) {
        if (coinType) {
          return axios.get(`https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.KRW-BTC&count=90`)
        }
      }
    },
    mounted: function () {
      this.fetchData(this.coinType)
          .then((result) => {
            const chartData = result.data.map(data => {
              return [
                  data.timestamp,
                  data.openingPrice,
                  data.highPrice,
                  data.lowPrice,
                  data.tradePrice
              ]
            })
            this.initializeChart(chartData.reverse());
          })

    },
    beforeDestroy: function () {
      this.clearChart();

    }
  }
</script>

<style scoped>

</style>