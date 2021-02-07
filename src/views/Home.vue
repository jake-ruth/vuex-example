<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <PracticeRoutine />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import PracticeRoutine from '../components/PracticeRoutine.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    PracticeRoutine
  }
};
</script>
