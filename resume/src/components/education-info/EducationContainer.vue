<template>
  <div id="educationContainer">
    <EducationHeadline />

    <EducationSection :education-section="universitySection" />
    <HorizontalLine :size=1 />
    <EducationSection :education-section="abiturSection" />

  </div>
</template>

<script setup>

import EducationHeadline from "./EducationHeadline.vue";
import HorizontalLine from "../HorizontalLine.vue";
import EducationSection from "./EducationSection.vue";
import {ref} from "vue";

const universitySection = ref({
  headline: "Freie Universität Berlin",
  from: "10/2012",
  until: "03/2017",
  sections: [],
})

const abiturSection = ref({
  headline: "Abitur - Frankfurt (Oder)",
  from: "",
  until: "05/2012",
  sections: [],
})

</script>

<style scoped>
#educationContainer {
  padding: 20px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
