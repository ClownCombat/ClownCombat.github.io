<template>
  <div id="workExperienceInfoContainer">
    <WorkExperienceHeadline />

  </div>
</template>

<script setup>

import WorkExperienceHeadline from "./WorkExperienceHeadline.vue";
</script>

<style scoped>
#workExperienceInfoContainer {
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
