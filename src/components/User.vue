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
          placeholder="username"
        ></b-form-input>
        <b-form-input
          v-model="password"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder="password"
        ></b-form-input>
        <b-form-input
          v-model="verify"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder="password"
        ></b-form-input>

        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="register"
          >Register</b-button
        >
      </b-nav-form>
      <b-nav-form v-if="!$root.user.loggedIn">
        <b-form-input
          action="/auth/login"
          method="post"
          v-model="username"
          size="sm"
          class="mr-sm-2"
          placeholder="username"
        ></b-form-input>
        <b-form-input
          v-model="password"
          type="password"
          size="sm"
          class="mr-sm-2"
          placeholder="password"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="login"
          >Login</b-button
        >
      </b-nav-form>
      <div v-else>
        <div>
          <p>Welcome {{ $root.user.username }}</p>
        </div>
        <b-button
          text-xs-right
          @click="logout"
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          >Logout</b-button
        >
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
        this.$root.user.username = res.username;
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
        this.$root.user.username = res.username;
      } else {
      }
    },
    async logout() {
      let res = await Ajax.$post("/auth/logout");
      if (res.success) {
        this.$root.user.loggedIn = false;
        this.$root.user.username = "not logged in";
      }
    },
  },
};
</script>


<style>
</style>
