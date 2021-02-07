<template>
  <div id="app">
    <h1 style="margin: 0">Jake's Example Vuex App</h1>
    <div id="nav">
      <router-link to="/">Create</router-link> |
      <router-link to="/about">My Routines</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  background: rgb(77, 77, 77);
  height: 100vh;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: lightseagreen;
}
</style>
