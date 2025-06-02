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
  color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    width: 33%;
  }

  @media (min-device-width: 1025px) {
    width: 33%;
  }
}


</style>
