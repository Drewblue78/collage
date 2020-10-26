<template>
  <div>
    <h1>REGISTER</h1>
    <form action="/api/register" method="post">
      <input name="username" />
      <input name="password" type="password" />
      <input id="verify" type="password" />
      <button>Register</button>
    </form>
    <hr />
    <h1>LOGIN</h1>
    <form action="/api/login" method="post">
      <input name="username" />
      <input name="password" type="password" />
      <button>Login</button>
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
