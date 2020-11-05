<template>
  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="d-flex justify-content-end">
      <b-nav-form
        v-if="!$root.user.loggedIn"
        class="d-flex justify-content-end"
      >
        <b-form-input
          action="/auth/register"
          method="post"
          v-model="username"
          size="sm"
          class="mr-sm-2"
          placeholder=""
        ></b-form-input>
        <b-form-input
          v-model="password"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder=""
        ></b-form-input>
        <b-form-input
          v-model="verify"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder=""
        ></b-form-input>

        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="register"
          >Register</b-button
        >

        <b-form-input
          action="/auth/login"
          method="post"
          v-model="username"
          size="sm"
          class="mr-sm-2"
          placeholder=""
        ></b-form-input>
        <b-form-input
          v-model="password"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder=""
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="login"
          >Login</b-button
        >
      </b-nav-form>
      <div v-else>
        <b-button @click="logout" size="sm" class="my-2 my-sm-0" type="submit"
          >Logout</b-button
        >
        {{ $root.user.username }}
      </div>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
import Ajax from "@/Ajax.js";
export default {
  props: {
    msg: String,
  },
  data: () => ({
    username: "",
    password: "",
    verify: "",
  }),
  methods: {
    async login() {
      let res = await Ajax.$post("/auth/login", {
        username: this.username,
        password: this.password,
      });
      if (res.success) {
        this.$root.user.loggedIn = true;
      } else {
      }
    },
    async register() {
      let res = await Ajax.$post("/auth/register", {
        username: this.username,
        password: this.password,
      });
      if (res.success) {
        this.$root.user.loggedIn = true;
      } else {
      }
    },
    async logout() {
      let res = await Ajax.$post("/auth/logout");
      if (res.success) {
        this.$root.user.loggedIn = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
