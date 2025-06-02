<template>
  <div id="languageContainer">
    <LanguageHeadline />
    <LanguageInfo info="German" level="4" level-description="mother tongue" />
    <LanguageInfo info="English" level="3" level-description="fluently" />
    <LanguageInfo info="Spanish" level="1" level-description="A2" />
  </div>
</template>

<script setup>
import LanguageHeadline from "./LanguageHeadline.vue";
import LanguageInfo from "./LanguageInfo.vue";
</script>

<style scoped>
#languageContainer {
  padding: 8px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
