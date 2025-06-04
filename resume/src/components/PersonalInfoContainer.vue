<template>
  <div id="pInfoContainer">
    <DevPicture />
    <DevInfoContainer />
  </div>
</template>

<script setup>

import DevPicture from "./dev-info/DevPicture.vue";
import DevInfoContainer from "./dev-info/DevInfoContainer.vue";

</script>

<style scoped>
#pInfoContainer {
  background-color: #fff;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  box-sizing: border-box;
  color: #313131;
  display: flex;
  flex-direction: column;
  width: 95%;

  @media (min-device-width: 800px) and (max-device-width: 1024px) {
    align-items: stretch;
    margin-left: 12px;
    width: 40%;
  }

  @media (min-device-width: 1025px) {
    align-items: stretch;
    margin-left: 12px;
    width: 50%;
  }
}


</style>
