<template>
  <div id="container">
    <PersonalDetailsContainer />
    <HorizontalLine />
    <CodingLanguagesContainer />
    <HorizontalLine />
    <SkillsContainer />
    <HorizontalLine />
    <LanguageContainer />
    <HorizontalLine />
    <CertificatesContainer />
  </div>
</template>

<script setup>
import PersonalDetailsContainer from "./personal-info/PersonalDetailsContainer.vue";
import HorizontalLine from "../HorizontalLine.vue";
import CodingLanguagesContainer from "./coding-language/CodingLanguageContainer.vue";
import SkillsContainer from "./skills/SkillsContainer.vue";
import LanguageContainer from "./language-info/LanguageContainer.vue";
import CertificatesContainer from "./certificates-info/CertificatesContainer.vue";

</script>

<style scoped>
#container {
  padding: 16px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
