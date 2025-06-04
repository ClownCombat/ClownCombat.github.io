<script setup>
import FlexGrid from './components/FlexGrid.vue'
</script>

<template>
  <div id="pdfDownloadButton">
    <a class="pdfDownloadLink" href="nrehbein_cv.pdf" target="_blank">Download as PDF</a>
  </div>
  <FlexGrid msg="Vite + Vue" />
</template>

<style scoped>

#pdfDownloadButton {
  margin-right: 24px;
  margin-top: 24px;
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  z-index: 5;
}

.pdfDownloadLink {
  all: unset;
  background-color: #3f51b5;
  border-radius: 4px;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Inter', 'Roboto', sans-serif;
  font-weight: 600;
  line-height: 16px;
  padding: 12px;
  transition: all .3s ease;
}

.pdfDownloadLink:hover {
  background-color: #283593;
  box-shadow: 0 3px 8px #0000003d, 0 3px 20px #00000030;
  transform: scale(1.05);
}

</style>
