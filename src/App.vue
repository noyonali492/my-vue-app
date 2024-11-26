<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NavBar></NavBar>

  <h2>Body</h2>
  <FooterNoyon></FooterNoyon>
</template>

<script>
import FooterNoyon from './components/FooterNoyon.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterNoyon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
