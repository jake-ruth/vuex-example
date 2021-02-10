<template>
  <v-app>
    <v-navigation-drawer app absolute temporary v-model="drawer">
      <v-toolbar></v-toolbar>
      <v-toolbar flat>
        <v-list>
          <router-link to="/" class="d-flex align-center" style="text-decoration: none">
            <v-list-tile>
              <v-list-tile-title @click.stop="drawer != drawer" class="title">Home</v-list-tile-title>
            </v-list-tile>
          </router-link>
          <router-link to="/about" class="d-flex align-center" style="text-decoration: none">
            <v-list-tile>
              <v-list-tile-title @click.stop="drawer != drawer" class="title">About</v-list-tile-title>
            </v-list-tile>
          </router-link>
          <router-link to="/resources" class="d-flex align-center" style="text-decoration: none">
            <v-list-tile>
              <v-list-tile-title @click.stop="drawer != drawer" class="title">Resources</v-list-tile-title>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <v-main>
      <v-app-bar app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
