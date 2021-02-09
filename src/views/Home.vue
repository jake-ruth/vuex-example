<template>
  <div class="home">
    <h1>Home</h1>
    <h1>Your Practice Routine</h1>
    <PracticeRoutine />
  </div>
</template>

<script>
import PracticeRoutine from '../components/PracticeRoutine.vue';

export default {
  name: 'Home',
  components: {
    PracticeRoutine
  }
};
</script>
