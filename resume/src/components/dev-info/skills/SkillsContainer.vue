<template>
  <div id="skillsContainer">
    <SkillsInfoHeadline />
    <SkillsInfo icon="gauge" info="Agile Methods" :skills="['Scrum', 'Kanban', 'Pair Programming']" />
    <SkillsInfo icon="terminalArrow" info="IDEs" :skills="['Intellij', 'Eclipse']" />
    <SkillsInfo icon="gear" info="Frameworks" :skills="['Spring', 'Vue / Nuxt', 'React / NextJs']" />

    <SkillsInfo icon="bugs" info="Testing" :skills="['J-Unit', 'Playwright / Cypress', 'Visual SnapShot']" />
    <SkillsInfo icon="tableColumn" info="Continous Int." :skills="['Github Workflows', 'Jenkins']" />
    <SkillsInfo icon="branching" info="Versioning" :skills="['Git']" />

    <SkillsInfo icon="listCheck" info="Project Management" :skills="['Jira', 'Confluence']" />
    <SkillsInfo icon="cloud" info="Virtualization" :skills="['Docker', 'Vagrant']" />
    <SkillsInfo icon="cloudUpload" info="Orchestration" :skills="['Cloudformation', 'Kubernetes']" />

    <SkillsInfo icon="forwardArrow" info="Knowledge Transfer" :skills="['Confluence']" />
    <SkillsInfo icon="document" info="CMS" :skills="['Bloomreach', 'AEM']" />
  </div>
</template>

<script setup>
import SkillsInfoHeadline from "./SkillsInfoHeadline.vue";
import SkillsInfo from "./SkillsInfo.vue";
</script>

<style scoped>
#skillsContainer {
  padding: 8px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
