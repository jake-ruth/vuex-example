<template>
  <div>
    <li class="practice-item">
      <div>{{ practiceItem.title }}, {{ practiceItem.minutes }} min</div>
      <button class="delete-btn" @click="$store.commit('deletePracticeItem', index)">Delete</button>
    </li>
  </div>
</template>

<script>
export default {
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
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
}

.delete-btn {
  background: lightcoral;
  border: none;
  cursor: pointer;
  color: white;
}
</style>
