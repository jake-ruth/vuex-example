<template>
  <div>
    <li  v-bind:class="{ 'practice-item': true, 'current-item': this.$store.state.practiceItemIndex === index && this.$store.state.playing }">
      <div>{{ practiceItem.title }}, {{ practiceItem.minutes }} min</div>

      <CountdownTimer v-if="this.$store.state.playing && index === this.$store.state.practiceItemIndex"/>
      <button v-if="!this.$store.state.playing" class="delete-btn" @click="$store.commit('deletePracticeItem', index)">Delete</button>
    </li>
  </div>
</template>

<script>
import CountdownTimer from './CountdownTimer.vue';
export default {
  components: { CountdownTimer },
  name: 'PracticeItem',
  props: {
    practiceItem: {
      title: String,
      minutes: Number
    },
    index: Number
  }
};
</script>

<style scoped>
.practice-item {
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
}

.current-item {
  background: lightseagreen;
}

.delete-btn {
  background: lightcoral;
  border: none;
  cursor: pointer;
  color: white;
}
</style>
