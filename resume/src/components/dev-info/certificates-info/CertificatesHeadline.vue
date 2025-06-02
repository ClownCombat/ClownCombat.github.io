<template>
  <div id="certificatesHeadlineContainer">
    <div class="svg-container">
      <CertificatesSvg />
    </div>

    <div class="text-container">
      <span>Certificates</span>
    </div>

  </div>
</template>

<script setup>

import CertificatesSvg from "../../svgs/CertificatesSvg.vue";

defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

</script>

<style scoped>
#certificatesHeadlineContainer {
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
