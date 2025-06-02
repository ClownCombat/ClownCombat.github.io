<template>
  <div id="workExperienceContainer">
    <div>Test</div>
    <div>Test2</div>
    <div>Test3</div>
  </div>
</template>

<script setup>

defineProps({
  msg: String,
})

</script>

<style scoped>
#workExperienceContainer {
  display: flex;
  background: #535bf2;
  flex-direction: column;
  justify-content: center;
  width: 95%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    width: 63%;
  }
}
</style>
