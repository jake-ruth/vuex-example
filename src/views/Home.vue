<template>
  <div class="home">
    <h1>Home</h1>
    <h1>Your Practice Routine</h1>
    <PracticeRoutine />
    <Metronome />
  </div>
</template>

<script>
import PracticeRoutine from '../components/PracticeRoutine.vue';
import Metronome from '../components/Metronome';

export default {
  name: 'Home',
  components: {
    PracticeRoutine,
    Metronome
  }
};
</script>
