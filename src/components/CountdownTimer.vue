<template>
  <countdown :end-time="new Date().getTime() + 60000 * minutes">
    <template v-slot:process="anyYouWantedScopName">
      <samp>{{ `Lefttime: ${formatTime(anyYouWantedScopName.timeObj.ceil.s)}` }}</samp>
    </template>
    <template v-slot:finish>
      <span>Done!</span>
    </template>
  </countdown>
</template>

<script>
export default {
  name: 'CountdownTimer',
  props: {
    minutes: Number
  },
  methods: {
    formatTime(seconds) {
      return `${Math.floor(seconds / 60)} min, ${seconds % 60} sec`;
    }
  }
};
</script>
