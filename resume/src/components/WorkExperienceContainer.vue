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
  flex-grow: 2;
  width: 63%;
}
</style>
