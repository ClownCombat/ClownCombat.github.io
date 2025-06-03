<template>
  <div class="workExpSection">

    <div class="headlineAndDataRange">
      <span class="sectionHeadline">{{ workSection.headline }}</span>
      <div class="dataRange">
        <CalendarNoteBookSvg />
        <div class="fromToContainer"><span>{{ workSection.from }}</span> - <span :class="untilStyling">{{ workSection.until }}</span></div>
      </div>
    </div>

    <div v-for="section in workSection.sections" :key="section">
      <span class="workSectionHeadline">{{ section.headline }}</span>
      <ul class="sectionItemList">
        <li v-for="sectionItem in section.items" :key="sectionItem">{{sectionItem}}</li>
      </ul>
    </div>

  </div>
</template>

<script setup>

import CalendarNoteBookSvg from "../svgs/CalendarNoteBookSvg.vue";
import {ref} from "vue";

const props = defineProps({
  workSection: {
    headline: String,
    from: String,
    until: String,
    sections: [],
  },
})

var untilStyling = ref("")
if (props.workSection.until === "current") {
  untilStyling = "inverseColor"
}


</script>

<style scoped>
.workExpSection {
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

.headlineAndDataRange {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sectionHeadline {
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 700;
}

.dataRange {
  align-items: center;
  color: #3f51b5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}

.fromToContainer {
  font-size: 16px;
  font-weight: 600;
}

.workSectionHeadline {
  color: #1a1a1a;
  font-size: 20px;
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
    line-height: 22px;
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
    width: 16px;
  }
}

</style>
