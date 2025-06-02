<template>
  <div id="container">
    <DevInfoDetail info="Senior Software Engineer" icon="suitcase" />
    <DevInfoDetail info="Berlin, Germany" icon="house" />
    <DevInfoDetail info="11/1992" icon="cake" />
    <DevInfoDetail info="rehbein.norman@gmail.com" icon="letter" />
    <DevInfoDetail info="Github" :is-link=true url="https://github.com/ClownCombat" icon="arrowright" />
  </div>
</template>

<script setup>
import DevInfoDetail from "./PersonalDetail.vue";
import HorizontalLine from "../HorizontalLine.vue";

</script>

<style scoped>
#container {
  margin: 18px 0;

  @media (min-device-width: 600px) and (max-device-width: 1024px) {
    margin: 24px 0;
  }

  @media (min-device-width: 1025px) {
    margin: 24px 0;
  }
}

</style>
