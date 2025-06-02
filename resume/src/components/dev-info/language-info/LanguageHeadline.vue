<template>
  <div id="languageHeadlineContainer">
    <div class="svg-container">
      <GlobusSvg />
    </div>

    <div class="text-container">
      <span>Languages</span>
    </div>

  </div>
</template>

<script setup>

import CodeSvg from "../../svgs/CodeSvg.vue";
import GlobusSvg from "../../svgs/GlobusSvg.vue";

defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

</script>

<style scoped>
#languageHeadlineContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.text-container {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}

.svg-container {
  color: #3f51b5;
  min-width: 48px;
}


</style>
