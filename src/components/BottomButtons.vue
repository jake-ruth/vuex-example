<template>
  <div>
    <div class="bottom-btn-row">
      <button v-if="$store.state.playing" class="play-btn" @click="$store.commit('setPracticeItemIndex', false)">
        <i class="fas fa-arrow-left" style="margin-right: 10px"></i>Back
      </button>
      <div v-if="!this.$store.state.playing">
        <add-practice-item-modal />
      </div>
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
import AddPracticeItemModal from './AddPracticeItemModal.vue';
export default {
  components: { AddPracticeItemModal },
  name: 'BottomButtons'
};
</script>

<style scoped>
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
