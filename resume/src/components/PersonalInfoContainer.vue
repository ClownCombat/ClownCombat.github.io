<template>
  <div id="pInfoContainer">
    <DevPicture />
    <DevInfoContainer />
  </div>
</template>

<script setup>

import DevPicture from "./personal-info/DevPicture.vue";
import DevInfoContainer from "./personal-info/DevInfoContainer.vue";

defineProps({
  msg: String,
})

</script>

<style scoped>
#pInfoContainer {
  background-color: #fff;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
  color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
}

.test {
  width: 100%;
}
</style>
