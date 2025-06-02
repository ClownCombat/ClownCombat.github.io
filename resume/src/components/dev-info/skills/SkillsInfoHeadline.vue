<template>
  <div id="codingLangHeadlineContainer">
    <div class="svg-container">
      <AsteriksSvg />
    </div>

    <div class="text-container">
      <span>Skills</span>
    </div>

  </div>
</template>

<script setup>

import {ref} from "vue";
import AsteriksSvg from "../../svgs/AsteriksSvg.vue";

const props = defineProps({
  info: String,
  url: String,
  isLink: Boolean,
  icon: String,
})

const house = ref(false)
const bDayCake = ref(false)
const letter = ref(false)
const suitCase = ref(false)
const arrowRight = ref(false)

house.value = props.icon === "house"
bDayCake.value = props.icon === "cake"
letter.value = props.icon === "letter"
suitCase.value = props.icon === "suitcase"
arrowRight.value = props.icon === "arrowright"

</script>

<style scoped>
#codingLangHeadlineContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.text-container {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}

.svg-container {
  color: #3f51b5;
  min-width: 32px;
  line-height: 0;
}


</style>
