<template>
  <div id="educationHeadlineContainer">
    <div class="svg-container">
      <EducationBookSvg />
    </div>

    <div class="text-container">
      <span>Education</span>
    </div>

  </div>
</template>

<script setup>

import EducationBookSvg from "../svgs/EducationBookSvg.vue";

defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

</script>

<style scoped>
#educationHeadlineContainer {
  align-items: center;
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 12px;
  padding-bottom: 28px;

  svg {
    font-size: 24px;

  }
}

.text-container {
  font-size: 32px;
  line-height: 36px;
  font-weight: 500;
}

.svg-container {
  color: #3f51b5;
  min-width: 48px;
  font-size: 0;
}


</style>
