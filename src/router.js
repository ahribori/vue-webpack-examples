import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Counter from "./views/Counter.vue";
import Coin from "./views/Coin.vue";
import Parent from './views/Parent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter
    },
    {
      path: "/coin",
      name: "coin",
      component: Coin
    },
    {
      path: "/parent",
      name: "parent",
      component: Parent
    }
  ]
});
