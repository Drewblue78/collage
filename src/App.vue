<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <User />
    <User />
    <Collage />
  </div>
</template>

<script>
import User from "./components/User.vue";
import Collage from "./components/Collage.vue";

export default {
  name: "App",
  components: {
    User,
    Collage,
  },
};
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
