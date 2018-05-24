<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
              v-model="drawer"
              clipped
              fixed
              app
      >
        <v-list dense>
          <v-list-tile @click="go('/')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="go('/coin')">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Coin Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="go('/counter')">
            <v-list-tile-action>
              <v-icon>menu</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Counter</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="go('/parent')">
            <v-list-tile-action>
              <v-icon>menu</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Parent</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>My First Vue Application</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>
      <v-footer color="indigo" dark app fixed>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/coin">Coin</router-link>
      <router-link to="/parent">Parent</router-link>
    </div>
  </div>
</template>

<script>
  import router from './router.js';
  export default {
    data: () => ({
      drawer: false,
    }),
    props: {
      source: String
    },
    methods: {
      go: function(path) {
        router.push(path);
      }
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
