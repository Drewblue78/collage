<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Collage Creator</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
          <form action="/api/register" method="post">
            <input name="username" />
            <input name="password" type="password" />
            <input id="verify" type="password" />
            <button>Register</button>
          </form>
          <form class="form-inline" action="/api/login" method="post">
            <input name="username" />
            <input name="password" type="password" />
            <button>Login</button>
          </form>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
