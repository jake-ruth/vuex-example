<template>
  <div class="practice-routine">
    <ul v-for="(item, index) in this.$store.state.practiceItems" :key="item">
      <PracticeItem :practiceItem="item" :index="index" />
    </ul>

    <div v-if="!this.$store.state.playing">
      <add-practice-item />
    </div>

    <div class="bottom-btn-row">
      <button v-if="$store.state.playing" class="play-btn" @click="$store.commit('setPracticeItemIndex', false)">
        <i class="fas fa-arrow-left" style="margin-right: 10px"></i>Back
      </button>
      <v-btn color="primary" @click="$store.commit('setPlaying')">
        {{ this.$store.state.playing ? 'Pause' : 'Start'
        }}<i :class="this.$store.state.playing ? 'fas fa-pause' : 'fas fa-play'" style="margin-left: 10px"></i>
      </v-btn>
      <button v-if="$store.state.playing" class="play-btn" @click="$store.commit('setPracticeItemIndex', true)">
        Next <i class="fas fa-arrow-right" style="margin-left: 10px"></i>
      </button>
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
  border-radius: 5px;
  padding: 20px;
  margin-left: 30%;
  margin-right: 30%;
  background: rgb(116, 116, 116);
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
