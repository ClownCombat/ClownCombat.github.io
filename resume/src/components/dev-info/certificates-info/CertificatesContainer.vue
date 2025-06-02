<template>
  <div id="certificatesContainer">
    <CertificatesHeadline />
    <CertificatesInfo info="Scrum Developer" level="3" level-description="2019 - 2023" />
    <CertificatesInfo info="Scrum Master" level="2" level-description="2019 - 2021" />
  </div>
</template>

<script setup>
import CertificatesHeadline from "./CertificatesHeadline.vue";
import CertificatesInfo from "./CertificatesInfo.vue";
</script>

<style scoped>
#certificatesContainer {
  padding: 8px;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    padding: 16px;
  }

  @media (min-device-width: 1025px) {
    padding: 16px;
  }
}

</style>
