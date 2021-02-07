<template >
<countdown :end-time="new Date().getTime() + 60000 * minutes">
  <template
    v-slot:process="anyYouWantedScopName">
      <span>{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
    </template>
  <template
    v-slot:finish>
      <span>Done!</span>
  </template>
</countdown>
</template>

<script>
export default {
    name: 'CountdownTimer',
    props: {
      minutes: Number
    }
}
</script>