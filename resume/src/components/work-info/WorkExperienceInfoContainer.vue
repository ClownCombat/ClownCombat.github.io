<template>
  <div id="workExperienceInfoContainer">
    <WorkExperienceHeadline />

    <WorkExperienceSection :work-section="currentEmployerWorkSection" />
    <HorizontalLine :size=1 />
    <WorkExperienceSection :work-section="divaEWorkSections" />
  </div>
</template>

<script setup>

import HorizontalLine from "../HorizontalLine.vue";
import WorkExperienceSection from "./WorkExperienceSection.vue";
import WorkExperienceHeadline from "./WorkExperienceHeadline.vue";
import {ref} from "vue";

const currentEmployerSectionOne = {
  headline: "Current Daily Business:",
  items:
      [
        "Work as a fullstack engineer for a web app",
        "Part of an agile Team",
        "Full lifecycle responsibility - from conception to deployment"
      ],
}

const currentEmployerSectionTwo = {
  headline: "Technologies",
  items: [
      "Spring Boot Backend with Kotlin (Webflux, Kafka)",
      "SSR Frontend with NextJs and Typescript",
      "Cloud Deployment via AWS-CDK with TypeScript",
  ],

}

const currentEmployerWorkSection = ref({
  headline: "Software Engineer / idealo Internet Gmbh",
  from: "11/2021",
  until: "current",
  sections: [currentEmployerSectionOne, currentEmployerSectionTwo],
})

const divaESectionOne = {
  headline: "Tasks:",
  items: [
      "Worked as an onsite-consultant for multiple customer project",
      "Analyzed functional and technical requirements",
      "Worked as Fullstack-Developer in agile Teams",
      "Led the Newcomers and Interns clean code developer training",
      "Worked with multiple CMS Systems",
      "Worked with different Frontend Technologies (VueJs, ReactJS, AngularJs)",
  ],
}

const divaEWorkSections = ref({
  headline: "Senior Software Engineer / diva-e Digital Value Excellence GmbH",
  from: "03/2016",
  until: "07/2021",
  sections: [divaESectionOne],
})

</script>

<style scoped>
#workExperienceInfoContainer {
  padding: 20px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
