<template>
  <div class="skillInfoContainer">
    <GaugeSimpleSvg v-if="gauge" />
    <ArrowRightFromBracket v-if="terminalArrow" />
    <GearSvg v-if="gear" />
    <BugsSvg v-if="bugs" />
    <TableColumnSvg v-if="tableColumn" />
    <BranchingSvg v-if="branching" />
    <ListCheckSvg v-if="listCheck" />
    <CloudSvg v-if="cloud" />
    <CloudUploadSvg v-if="cloudUpload" />
    <ForwardArrowSvg v-if="forwardArrow" />
    <DocumentSvg v-if="document" />

    <div class="skillDescriptionContainer">
      <span class="langInfo">{{info}}:</span>
      <div class="SkillExpBarContainer">
        <SkillExpBar v-for="skill in skills" :skill="skill" :info="skill" />
      </div>
    </div>
  </div>
</template>

<script setup>

import GaugeSimpleSvg from "../../svgs/GaugeSimpleSvg.vue";
import SkillExpBar from "./SkillExpBar.vue";
import {ref} from "vue";
import ArrowRightFromBracket from "../../svgs/TerminalArrow.vue";
import GearSvg from "../../svgs/GearSvg.vue";
import TableColumnSvg from "../../svgs/TableColumnSvg.vue";
import BugsSvg from "../../svgs/BugsSvg.vue";
import BranchingSvg from "../../svgs/BranchingSvg.vue";
import ListCheckSvg from "../../svgs/ListCheckSvg.vue";
import CloudSvg from "../../svgs/CloudSvg.vue";
import CloudUploadSvg from "../../svgs/CloudUploadSvg.vue";
import ForwardArrowSvg from "../../svgs/ForwardArrowSvg.vue";
import DocumentSvg from "../../svgs/DocumentSvg.vue";

const props = defineProps({
  icon: String,
  info: String,
  skills: Array,
})

const gauge = ref(false)
const terminalArrow = ref(false)
const gear = ref(false)
const bugs = ref(false)
const tableColumn = ref(false)
const branching = ref(false)
const listCheck = ref(false)
const cloud = ref(false)
const cloudUpload = ref(false)
const forwardArrow = ref(false)
const document = ref(false)

gauge.value = props.icon === "gauge"
terminalArrow.value = props.icon === "terminalArrow"
gear.value = props.icon === "gear"
bugs.value = props.icon === "bugs"
tableColumn.value = props.icon === "tableColumn"
branching.value = props.icon === "branching"
listCheck.value = props.icon === "listCheck"
cloud.value = props.icon === "cloud"
cloudUpload.value = props.icon === "cloudUpload"
forwardArrow.value = props.icon === "forwardArrow"
document.value = props.icon === "document"

</script>

<style scoped>
.skillInfoContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-left: 10px;
  padding-top: 24px;
  padding-left: 20px;

  > svg {
    font-size: 12px;
  }
}

.skillDescriptionContainer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px 4px;
}

.SkillExpBarContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
}

.langInfo {
  font-weight: 500;
}

</style>
