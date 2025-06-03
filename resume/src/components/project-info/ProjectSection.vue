<template>
  <div class="projectSection">

    <div class="headlineAndProjectRole">
      <div>
        <span class="sectionHeadline">
          {{ projectSection.headline }}
        </span>
        <span class="sectionProjectClient">
        / {{ projectSection.projectClient }}
        </span>
      </div>

      <div class="projectRole">
        <ProjectRoleSvg />
        <div class="projectRoleDescription">{{projectSection.roleDescription}}</div>
      </div>

      <button class="showMoreButton" @click="toggleProjectDetails">{{ moreButtonDescription }}</button>
    </div>

    <div v-for="section in projectSection.sections" :key="section" :style="{display: projectDetailsShown ? 'block' : 'none' }">
      <span class="projectSectionHeadline">{{ section.headline }}</span>
      <ul class="sectionItemList">
        <li v-for="sectionItem in section.items" :key="sectionItem"><span>{{sectionItem}}</span></li>
      </ul>
    </div>

  </div>
</template>

<script setup>

import {computed, ref} from "vue";
import ProjectRoleSvg from "../svgs/ProjectRoleSvg.vue";

defineProps({
  projectSection: {
    headline: String,
    roleDescription: String,
    sections: [],
  },
})


var projectDetailsShown = ref(false)

function toggleProjectDetails() {
  projectDetailsShown.value = !projectDetailsShown.value;
}

const moreButtonDescription = computed(() => projectDetailsShown.value ? '- Hide' : '+ More Information' )


</script>

<style scoped>
.projectSection {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 14px;
  margin-left: 32px;
}

.inverseColor {
  background-color: #3f51b5;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
}

.headlineAndProjectRole {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sectionHeadline {
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
}

.sectionProjectClient {
  color: #1a1a1a;
  font-size: 20px;
  font-style: italic;
  line-height: 22px;
}

.projectRole {
  align-items: center;
  color: #3f51b5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}

.projectRoleDescription {
  font-size: 16px;
  font-weight: 600;
  margin-left: 4px;
}

.fromToContainer {
  font-size: 16px;
  font-weight: 600;
}

.projectSectionHeadline {
  color: #1a1a1a;
  font-size: 20px;
}

.showMoreButton {
  background-color: #3f51b5;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  color: #fff;
  font-weight: 500;
  max-width: fit-content;
  padding: 2px 16px;
  outline: none;
  transition: all .3s ease;

  :hover {
    background-color: #283593;
    transform: scale(1.05);
    box-shadow: 0 3px 8px #0000003d, 0 3px 20px #00000030;
  }
}

.sectionItemList {
  color: #3f51b5;
  margin: 8px 0;
  list-style: none;
  padding-left: 20px;

  li {
    align-items: center;
    color: #1a1a1a;
    display: flex;
    font-size: 16px;
    padding-left: 8px;
    padding-top: 0;
    padding-bottom: 6px;

  }

  li::before {
    content: "•";
    color: #3f51b5;
    display: inline-block;
    font-weight: bold;
    font-size: 1.5em;
    line-height: 20px;
    width: 16px;
  }
}

</style>
