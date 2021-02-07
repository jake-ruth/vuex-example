<template>
  <div class="practice-routine">
    <ul v-for="(item, index) in this.$store.state.practiceItems" :key="item">
      <PracticeItem :practiceItem="item" :index="index" />
    </ul>

    <div v-if="!this.$store.state.playing">
    <add-practice-item />
    </div>

    <div class='bottom-btn-row'>
   <button class="play-btn" @click="$store.commit('setPracticeItemIndex', false)">Back</button>
      <button class="play-btn" @click="$store.commit('setPlaying')">{{ this.$store.state.playing ? 'pause' : 'play'}}</button>
       <button class="play-btn" @click="$store.commit('setPracticeItemIndex', true)">Next</button>
       </div>
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

.play-btn {
  color: white;
  background: lightseagreen;
  border: none;
  height: 30px;
  width: 100px;
}

.bottom-btn-row {
  display: flex;
  margin: 20px;
  justify-content: space-around;
}
</style>
