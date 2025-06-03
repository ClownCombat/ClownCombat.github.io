<template>
  <div id="devInfoContainer">
    <CodingLanguagesHeadline />
    <CodingLanguageInfo info="Java / Kotlin" years=9 />
    <CodingLanguageInfo info="JavaScript / TypeScript" years=7 />
    <CodingLanguageInfo info="Bash" years=7 />
  </div>
</template>

<script setup>

import CodingLanguagesHeadline from "./CodingLanguageHeadline.vue";
import CodingLanguageInfo from "./CodingLanguageInfo.vue";
</script>

<style scoped>
#devInfoContainer {
  padding: 8px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
