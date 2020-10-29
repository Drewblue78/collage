<template>
  <div>
    <br />

    <h4>REGISTER</h4>
    <form action="http://localhost:3000/auth/register" method="post">
      <input name="username" />
      <input name="password" type="password" />
      <input id="verify" type="password" />
      <button>Register</button>
    </form>
    <br />

    <h4>LOGIN</h4>
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
