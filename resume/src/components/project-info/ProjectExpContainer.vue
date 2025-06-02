<template>
  <div id="projectExpContainer">
    <ProjectExpHeadline />

  </div>
</template>

<script setup>

import ProjectExpHeadline from "./ProjectExpHeadline.vue";
</script>

<style scoped>
#projectExpContainer {
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
