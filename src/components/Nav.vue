<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Collage Creator</b-navbar-brand>
      <div id="nav">
        <User />
      </div>
    </b-navbar>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Nav",
  components: {
    User,
  },
};
</script>

<style>
.navbarNav {
  color: blue;
}
.navbar {
  color: blue;
}
</style>
