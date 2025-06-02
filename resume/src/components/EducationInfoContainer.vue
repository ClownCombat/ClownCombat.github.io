<template>
  <div id="educationInfoContainer">
    <EducationContainer />
  </div>
</template>

<script setup>


import EducationContainer from "./education-info/EducationContainer.vue";

defineProps({
  msg: String,
})

</script>

<style scoped>
#educationInfoContainer {
  background-color: #fff;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;

  @media (min-device-width: 1024px) {
    width: 48%;
  }

  @media (min-device-width: 1025px) {
    width: 63%;
  }
}

</style>
