<template>
  <div>
    <h1>REGISTER</h1>
    <form action="http://localhost:3000/auth/register" method="post">
      <input name="username" />
      <input name="password" type="password" />
      <input id="verify" type="password" />
      <button>Register</button>
    </form>

    <h1>LOGIN</h1>
    <form action="http://localhost:3000/auth/login" method="post">
      <input name="username" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
    <h1>LOGOUT</h1>
    <form action="http://localhost:3000/auth/logout" method="post">
      <button>Logout</button>
    </form>
    <h1>Check</h1>
    <form action="http://localhost:3000/auth/check" method="get">
      <button>Check</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
