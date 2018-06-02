<template>
  <v-card>
    <div id="container"></div>
  </v-card>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import mockData from './mockData.json';

  export default {
    name: "Chart",
    props: {
      coinType: String,
    },
    mounted: function() {
      Highcharts.stockChart('container', {
        rangeSelector: {
          selected: 1
        },

        title: {
          text: 'AAPL Stock Price'
        },

        series: [{
          type: 'candlestick',
          name: 'AAPL Stock Price',
          data: mockData.data,
          dataGrouping: {
            units: [
              [
                'week', // unit name
                [1] // allowed multiples
              ], [
                'month',
                [1, 2, 3, 4, 6]
              ]
            ]
          }
        }]
      })
    }
  }
</script>

<style scoped>

</style>