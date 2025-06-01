<template>
  <div id="container">
    <DevInfoDetail info="Senior Software Engineer" />
    <DevInfoDetail info="Berlin, Germany" />
    <DevInfoDetail info="11/1992" />
    <DevInfoDetail info="rehbein.norman@gmail.com" />
    <DevInfoDetail info="Github" :is-link=true url="https://github.com/ClownCombat" />
  </div>
</template>

<script setup>
import DevInfoDetail from "./DevInfoDetail.vue";

</script>

<style scoped>
#container {
  margin: 24px 0;
}

</style>
