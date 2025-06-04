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
        "Developed and maintained full-stack web applications",
        "Part of an agile team",
        "Feature Development from concept to deployment",
        "Contributed to architecture and code reviews to maintain high code quality",
        "Improved Core Web-Vitals and INP by 20%",
      ],
}

const currentEmployerSectionTwo = {
  headline: "Technologies",
  items: [
      "Backend: Kotlin (Spring Boot, Webflux, Kafka, MongoDB, PostgreSQL)",
      "Frontend: Nextjs (SSR), TypeScript",
      "Cloud Deployment via AWS-CDK with TypeScript",
      "Continuous zero-down-time deployment (multiple times per day)",
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
      "Served as an onsite-consultant for diverse client projects",
      "Analyzed functional and technical requirements",
      "Most common utilized role: Fullstack engineer",
      "Mentored junior developers and led clean code trainings",
      "Developed multiple CMS-based applications and custom spring-boot applications",
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
