<template>
  <div id="educationContainer">
    <EducationHeadline />

  </div>
</template>

<script setup>

import EducationHeadline from "./EducationHeadline.vue";
</script>

<style scoped>
#educationContainer {
  padding: 20px;
  width: 100%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
