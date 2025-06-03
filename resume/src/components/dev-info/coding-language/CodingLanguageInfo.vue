<template>
  <div id="codeLangContainer">
    <span class="langInfo">{{info}}:</span>
    <div class="expBar" :style="{ width: years * 10 + '%' }">{{years}} years</div>
  </div>
</template>

<script setup>

defineProps({
  info: String,
  years: Number,
})

</script>

<style scoped>
#codeLangContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-top: 24px;
  padding-left: 20px;
}

.langInfo {
  font-weight: 500;
}

.expBar {
  border-radius: 16px;
  background-color: #3f51b5;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  padding: 4px 12px;
  text-align: center;
}

</style>
