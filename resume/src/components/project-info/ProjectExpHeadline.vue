<template>
  <div id="projectExpHeadlineContainer">
    <div class="svg-container">
      <ScreenSvg />
    </div>

    <div class="text-container">
      <span>Project Experience</span>
    </div>

  </div>
</template>

<script setup>

import ScreenSvg from "../svgs/ScreenSvg.vue";

defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

</script>

<style scoped>
#projectExpHeadlineContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

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
