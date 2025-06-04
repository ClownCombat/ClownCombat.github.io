<template>
  <div id="projectExpInfoContainer">
    <ProjectExpContainer />
  </div>
</template>

<script setup>

import ProjectExpContainer from "./project-info/ProjectExpContainer.vue";

defineProps({
  msg: String,
})

</script>

<style scoped>
#projectExpInfoContainer {
  background-color: #fff;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

</style>
