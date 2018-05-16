<template>
  <div>
    <h2>Child</h2>
    <p>{{message}}</p>
    <p>{{a}}</p>
    <p>{{b}}</p>
    <button v-on:click="handleClick">뷰모델에 속성 추가</button>
  </div>
</template>

<script>
  export default {
    name: "Child",
    props: {
      message: String,
    },
    data: function () {
      return {
        a: 1,
        b: '', // b라는 변수를 반응형으로 만들려면 뭐라도 선언 해놔야함.
      };
    },
    methods: {
      handleClick: function (){
        this.$data.a ++;
        this.$data.b = 3;
      },
    }
  }
</script>

<style scoped>

</style>