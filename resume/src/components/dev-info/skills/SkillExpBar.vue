<template>
  <div class="skillExpBar">{{info}}</div>
</template>

<script setup>

defineProps({
  info: String,
})

</script>

<style scoped>

.skillExpBar {
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
