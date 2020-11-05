<template>
  <div id="app">
    <Nav />

    <div v-if="$root.user.loggedIn">
      <Collage />
      <Game />
    </div>
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";
import Collage from "./components/Collage.vue";
import Game from "./components/Game.vue";

export default {
  name: "App",
  components: {
    Nav,
    Collage,
    Game,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
#app.nav {
  color: blue;
}
canvas {
  border: 2px solid rgb(151, 151, 151);
  text-align: center;
}
</style>
