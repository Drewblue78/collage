<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
  </nav>
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
