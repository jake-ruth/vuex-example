<template>
  <div>
    <div className="metronome-box">
      <Typography color="textPrimary" variant="h6">
        Metronome
      </Typography>
      <!-- <div >{this.getBeatBoxes()}</div> -->
      <!-- <button @click="handleStartStop">{{ playing ? 'Stop' : 'Start' }}</button>
      <input @change="changeBPM" type="number" min="MIN_BPM" max="MAX_BPM" defaultValue="100" />
      <select @change="updateSubdivision" v-model="subdivision">
        <option>2</option>
        <option>3</option>
        <option selected>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Metronome',
  data() {
    return {
      DEFAULT_BPM: 120,
      MIN_BPM: 30,
      MAX_BPM: 300,
      playing: false,
      currentBeat: 3,
      subdivision: 4,
      activeBeats: [1, 1, 1, 1],
      metronomeWorker: new Worker(process.env.PUBLIC_URL + '/metronomeWorker.js')
    };
  },
  methods: {
    // updateSubdivision(e) {
    //   let newSubdivision = e.target.value;
    //   this.subdivision = newSubdivision;
    // }
  }
};
</script>
