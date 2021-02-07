<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        Jake's Example Vuex App
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div id="nav">
        <router-link to="/">Create</router-link> |
        <router-link to="/about">My Routines</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
};
</script>

<style scoped>
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
