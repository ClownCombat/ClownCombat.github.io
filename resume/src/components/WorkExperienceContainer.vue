<template>
  <div id="workExperienceContainer">
    <WorkExperienceInfoContainer />
  </div>
</template>

<script setup>

import WorkExperienceInfoContainer from "./work-info/WorkExperienceInfoContainer.vue";

defineProps({
  msg: String,
})

</script>

<style scoped>
#workExperienceContainer {
  background-color: #fff;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

</style>
