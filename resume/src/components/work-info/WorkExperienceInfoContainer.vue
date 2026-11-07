<template>
  <div id="workExperienceInfoContainer">
    <WorkExperienceHeadline />

    <WorkExperienceSection :work-section="currentEmployerWorkSection" />
    <HorizontalLine :size=1 />
    <WorkExperienceSection :work-section="idealoWorkSections" />
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
        "Developed and maintained multiple Backend Services and API's supporting customer identification and onboarding processes",
        "Developed and maintained team-owned Components in the Micro-Frontends",
        "Taking on bi-weekly rotation of scrum master and monitoring engineer roles",
        "Feature Development from concept to deployment to maintenance",
        "Contributed to architecture and code reviews to maintain high code quality",
      ],
}

const currentEmployerSectionTwo = {
  headline: "Technologies",
  items: [
      "Backend: Kotlin (Spring Boot, SNS, SQS, PostgreSQL, DynamoDB), Typescript (GraphQL)",
      "Frontend: Nextjs (SSR), Webpack Micro-Frontend, TypeScript",
      "Cloud Deployment via Terraform x AWS",
      "Continuous zero-down-time deployment (multiple times per day) with Jenkins",
      "AI Assisted Coding: Codex + OpenAI + Gemini"
  ],
}

const currentEmployerWorkSection = ref({
  headline: "Senior Software Engineer / Scalable Capital",
  from: "12/2025",
  until: "current",
  sections: [currentEmployerSectionOne, currentEmployerSectionTwo],
})

const idealoSectionOne = {
  headline: "Tasks:",
  items:
      [
        "Developed and maintained full-stack web applications",
        "Part of an agile team",
        "Feature Development from concept to deployment",
        "Contributed to architecture and code reviews to maintain high code quality",
        "Improved Core Web-Vitals and INP by 20%",
        "Active OnCall-Member to ensure the stability of the service 24/7",
      ],
}

const idealoSectionTwo = {
  headline: "Technologies:",
  items: [
      "Backend: Kotlin (Spring Boot, Webflux, Kafka, MongoDB, PostgreSQL)",
      "Frontend: Nextjs (SSR), TypeScript",
      "Cloud Deployment via AWS-CDK with TypeScript",
      "Continuous zero-down-time deployment (multiple times per day)",
  ],
}


const idealoWorkSections = ref({
  headline: "Software Engineer / idealo Internet GmbH",
  from: "11/2021",
  until: "11/2025",
  sections: [idealoSectionOne, idealoSectionTwo],
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
