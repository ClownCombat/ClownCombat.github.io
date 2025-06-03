<template>
  <div id="workExperienceHeadlineContainer">
    <div class="svg-container">
      <WorkSuitCaseSvg />
    </div>

    <div class="WorkExperienceHeadline">
      <span>Work Experience</span>
    </div>

  </div>
</template>

<script setup>

import WorkSuitCaseSvg from "../svgs/WorkSuitCaseSvg.vue";

defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

</script>

<style scoped>
#workExperienceHeadlineContainer {
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  padding-bottom: 28px;

  svg {
    font-size: 24px;

  }
}

.WorkExperienceHeadline {
  font-size: 36px;
  line-height: 36px;
  font-weight: 500;
}

.svg-container {
  color: #3f51b5;
  min-width: 48px;
  font-size: 0;
}


</style>
