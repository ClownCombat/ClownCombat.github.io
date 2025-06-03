<template>
  <div id="projectExpContainer">
    <ProjectExpHeadline />

    <ProjectSection :project-section="soccerClubProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="ecommerceProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="germanBankProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="germanShoppingClubProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="germanRealEStateAgencyProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="germanGroceriesWholesaleBusinessProject"/>
    <HorizontalLine :size="1" />
    <ProjectSection :project-section="germanInteractiveSearchFrontend"/>

  </div>
</template>

<script setup>

import ProjectExpHeadline from "./ProjectExpHeadline.vue";
import ProjectSection from "./ProjectSection.vue";
import HorizontalLine from "../HorizontalLine.vue";
import {
  ecommerceProject,
  germanBankProject, germanGroceriesWholesaleBusinessProject, germanInteractiveSearchFrontend,
  germanRealEStateAgencyProject,
  germanShoppingClubProject,
  soccerClubProject
} from "./projectData..js";


</script>

<style scoped>
#projectExpContainer {
  padding: 20px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
