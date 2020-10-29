<template>
  <div>
    <b-navbar class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Collage Creator</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div align="right">
        <br />

        <form action="http://localhost:3000/auth/register" method="post">
          <input name="username" />
          <input name="password" type="password" />
          <input id="verify" type="password" />
          <button>Register</button>
        </form>
        <br />

        <form action="http://localhost:3000/auth/login" method="post">
          <input name="username" />
          <input name="password" type="password" />
          <button>Login</button>
        </form>
        <br />
        <form action="http://localhost:3000/auth/logout" method="post">
          <button>Logout</button>
        </form>
        <hr />
      </div>
    </b-navbar>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Collage Creator</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form align="right">
              <b-form-input
                action="http://localhost:3000/auth/register"
                method="post"
                name="username"
                size="sm"
                class="mr-sm-2"
                placeholder=""
              ></b-form-input>
              <b-form-input
                name="password"
                type="password"
                size="sm"
                class="mr-sm-2"
                placeholder=""
              ></b-form-input>
              <b-form-input
                name="verify"
                type="password"
                size="sm"
                class="mr-sm-2"
                placeholder=""
              ></b-form-input>

              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Register</b-button
              >
              <b-nav-form>
                <b-form-input
                  action="http://localhost:3000/auth/login"
                  method="post"
                  name="username"
                  size="sm"
                  class="mr-sm-2"
                  placeholder=""
                ></b-form-input>
                <b-form-input
                  name="password"
                  type="password"
                  size="sm"
                  class="mr-sm-2"
                  placeholder=""
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Login</b-button
                >
              </b-nav-form>
              <b-form
                action="http://localhost:3000/auth/logout"
                method="post"
              ></b-form>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Logout</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbarNav {
  color: blue;
}
.navbar {
  color: blue;
}
</style>
