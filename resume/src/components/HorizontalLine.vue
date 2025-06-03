<template>
  <hr :style="{ height: heightForHr + 'px' }" />
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
  size: Number,
})

const height = props.size ? props.size : 2
const heightForHr = ref(height)


</script>

<style scoped>
hr {
  background-color: #3f51b5;
  box-sizing: content-box;
  border: 0;
  border-top: 1px solid #eee;
  color: #3f51b5;
  margin: 20px 0;
  overflow: visible;
}

</style>
