<template>
  <div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="d-flex justify-content-end">
        <b-nav-form class="d-flex justify-content-end">
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

          <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            @click="register"
            >Register</b-button
          >
          <b-nav-form>
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
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click="login"
              >Login</b-button
            >
          </b-nav-form>
          <b-form action="/auth/logout" method="post"></b-form>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Logout</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </div>
</template>

<script>
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
    login() {
      console.log(this.username, this.password);
    },
    register() {
      console.log(this.username, this.password);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
