<template>
  <div id="container">
    <DevInfoDetailsContainer />
    <HorizontalLine />
    <DevInfoCodingSkillsContainer />
    <HorizontalLine />
    <HorizontalLine />
  </div>
</template>

<script setup>
import DevInfoDetailsContainer from "./PersonalDetailsContainer.vue";
import HorizontalLine from "../HorizontalLine.vue";
import DevInfoCodingSkillsContainer from "./CodingSkillsContainer.vue";

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
