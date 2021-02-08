<template>
  <div class="practice-routine">
    <ul v-for="(item, index) in this.$store.state.practiceItems" :key="item">
      <PracticeItem :practiceItem="item" :index="index" />
    </ul>

    <bottom-buttons />
  </div>
</template>

<script>
import BottomButtons from './BottomButtons.vue';
import PracticeItem from './PracticeItem.vue';

export default {
  name: 'PracticeRoutine',
  components: {
    PracticeItem,
    BottomButtons
  }
};
</script>

<style scoped>
.practice-routine {
  border-radius: 5px;
  padding: 20px;
  margin-left: 30%;
  margin-right: 30%;
  background: rgb(116, 116, 116);
}
</style>
