<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Collage Creator</b-navbar-brand>
    <b-navbar-toggle class="ml-auto" target="nav-collapse"></b-navbar-toggle>
    <b-container>
      <User />
    </b-container>
  </b-navbar>
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

<style scoped>
.navbar-toggle {
  text-align: right;
}
</style>
