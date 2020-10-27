<template>
  <div id="app">
    <Nav />
    <User />
    <Collage />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import User from "./components/User.vue";
import Collage from "./components/Collage.vue";

export default {
  name: "App",
  components: {
    Nav,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
