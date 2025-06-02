<template>
  <div id="cv">
    <PersonalInfoContainer />
    <WorkExperienceContainer />
  </div>
</template>

<script setup>
import PersonalInfoContainer from "./PersonalInfoContainer.vue";
import WorkExperienceContainer from "./WorkExperienceContainer.vue";

</script>

<style scoped>
#cv {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin: auto;
  width: 100%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    flex-direction: row;
    gap: 1em;
  }

  @media (min-device-width: 1025px) {
    flex-direction: row;
    max-width: 1440px;
    gap: 1em;
  }
}
</style>
