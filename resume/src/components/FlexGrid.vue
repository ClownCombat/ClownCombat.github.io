<template>
  <div id="cv">
    <PersonalInfoContainer />
    <WorkExperienceContainer />
    <EducationInfoContainer />
    <ProjectExpInfoContainer />
  </div>
  <div class="footer"></div>
</template>

<script setup>
import PersonalInfoContainer from "./PersonalInfoContainer.vue";
import WorkExperienceContainer from "./WorkExperienceContainer.vue";
import EducationInfoContainer from "./EducationInfoContainer.vue";
import ProjectExpInfoContainer from "./ProjectExpInfoContainer.vue";

</script>

<style scoped>
#cv {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  padding-top: 10px;
  margin: auto;
  width: 100%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 1em;
  }

  @media (min-device-width: 1025px) {
    align-items: flex-start;
    flex-direction: row;
    max-width: 1440px;
    gap: 1em;
  }
}

.footer {
  background-color: #535bf2;
  margin-top: 1em;
  height: 50px;
  width: 100%;
}
</style>
