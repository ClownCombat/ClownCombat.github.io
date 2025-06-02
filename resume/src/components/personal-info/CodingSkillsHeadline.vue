<template>
  <div id="container">
    <div class="svg-container">
      <CodeSvg />
    </div>

    <div class="text-container">
      <span>Coding Languages</span>
    </div>

  </div>
</template>

<script setup>

import {ref} from "vue";
import HouseSvg from "../svgs/HouseSvg.vue";
import LetterSvg from "../svgs/LetterSvg.vue";
import BirthdayCakeSvg from "../svgs/BirthdayCakeSvg.vue";
import SuitCaseSvg from "../svgs/SuitCaseSvg.vue";
import ArrowRightClosingBracketSvg from "../svgs/ArrowRightClosingBracketSvg.vue";
import CodeSvg from "../svgs/CodeSvg.vue";

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
#container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.text-container {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}

.svg-container {
  color: #3f51b5;
  min-width: 48px;
}


</style>
