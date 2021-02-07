<template>
  <div class="practice-routine">
    <ul v-for="(item, index) in this.$store.state.practiceItems" :key="item">
      <PracticeItem :practiceItem="item" :index="index" />
    </ul>
    <add-practice-item />
  </div>
</template>

<script>
import AddPracticeItem from './AddPracticeItem.vue';
import PracticeItem from './PracticeItem.vue';

export default {
  name: 'PracticeRoutine',
  components: {
    AddPracticeItem,
    PracticeItem
  }
};
</script>

<style scoped>
.practice-routine {
  border: solid white 1px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
