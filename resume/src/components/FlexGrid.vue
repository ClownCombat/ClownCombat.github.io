<template>
  <div id="cv">
    <PersonalInfoContainer />
    <WorkExperienceContainer />
  </div>
</template>

<script setup>
import PersonalInfoContainer from "./PersonalInfoContainer.vue";
import WorkExperienceContainer from "./WorkExperienceContainer.vue";

defineProps({
  msg: String,
})

</script>

<style scoped>
#cv {
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-top: 10px;
  max-width: 1440px;
  margin: auto;
  width: 100%;
}
</style>
