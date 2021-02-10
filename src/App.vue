<template>
  <v-app>
    <v-main>
      <v-app-bar app dark>
        <router-link to="/" class="d-flex align-center" style="text-decoration: none">
          Jake's Example Vuex App CI/CD Typescript
        </router-link>
        <v-spacer> </v-spacer>

        <router-link to="/about" style="text-decoration: none">
          <v-btn text>
            about
          </v-btn>
        </router-link>

        <router-link to="/resources" style="text-decoration: none">
          <v-btn text>
            Resources
          </v-btn>
        </router-link>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
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
</style>
