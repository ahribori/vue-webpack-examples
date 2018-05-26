<template>
  <svg :width="size" :height="size" v-if="currentPrice">
    <line :x1="size/2" :y1="0" :x2="size/2" :y2="size"
          :style="direction === 'RISE' ? 'stroke:rgb(255,0,0);stroke-width:2' : 'stroke:rgb(0,0,255);stroke-width:2'"/>
    <line :x1="size/2" :y1="startPricePercentage + '%'" :x2="size/2" :y2="thickDiff ? currentPricePercentage + '%' : currentPricePercentage + 2 + '%'"
          :style="direction === 'RISE' ? 'stroke:rgb(255,0,0);stroke-width:8' : 'stroke:rgb(0,0,255);stroke-width:8'"/>
  </svg>
</template>

<script>
  export default {
    name: "Candle",
    props: {
      size: {
        default: 30,
        type: Number,
      },
      openingPrice: Number,
      currentPrice: Number,
      highPrice: Number,
      lowPrice: Number,
      direction: String,
    },
    computed: {
      thinDiff: function() {
        return this.highPrice !== this.lowPrice;
      },
      thickDiff: function() {
        return this.openingPrice !== this.currentPrice;
      },
      startPricePercentage: function () {
        const totalDiff = this.highPrice > this.lowPrice ?
            this.highPrice - this.lowPrice : this.lowPrice - this.highPrice;
        const percentage = (this.highPrice - this.openingPrice) / totalDiff * 100;
        return percentage;
      },
      currentPricePercentage: function () {
        const totalDiff = this.highPrice > this.lowPrice ?
            this.highPrice - this.lowPrice : this.lowPrice - this.highPrice;
        const percentage = (this.highPrice - this.currentPrice) / totalDiff * 100;
        return percentage;
      }
    }
  }
</script>

<style scoped>
  .align-end {
    position: absolute;
    right: 10px;
  }
</style>