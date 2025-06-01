<template>
  <div id="container">
    <img src="/nrehbein-q-50.webp" alt="Myself" />
    <div id="pictureText">
      <div id="devName">Norman Rehbein</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  msg: String,
})

</script>

<style scoped>
#container {
  position: relative;
}

#pictureText {
  color: #000;
  padding: .01em 16px;
  position: absolute;
  left: 0;
  bottom: 0;
}

#devName {
  color: #fff;
  font-size: 30px;
  font-family: Segoe UI, Arial, sans-serif;
  font-weight: 400;
  margin: 10px 0;
  padding-left: 50px;
}

img {
  width: 100%;
}

</style>
