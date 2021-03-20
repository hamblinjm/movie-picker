<template>
  <div id="app">
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <div class="footer">
      <a href="https://github.com/hamblinjm/movie-picker">GitHub Repo</a>
      <p>Images and snynopsis from IMDb and homeblogger.com</p>
    </div>
  </div>
</template>

<style>
html {
  background-color: rgb(41, 39, 39);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  background-color: rgb(130, 201, 168);
  padding: 10px;
  font-size: 12px;
  margin-top: 50px;
}

.footer p {
  margin-bottom: 0px;
}
</style>

