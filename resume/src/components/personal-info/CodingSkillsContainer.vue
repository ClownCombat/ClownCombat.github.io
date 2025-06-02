<template>
  <div id="container">
    <CodingSkillsHeadline />
  </div>
</template>

<script setup>


import CodingSkillsHeadline from "./CodingSkillsHeadline.vue";
</script>

<style scoped>
#container {
  padding: 8px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
