<template>
  <div class="personalDetailContainer">
    <div class="svg-container">
      <HouseSvg v-if="house"/>
      <BirthdayCakeSvg v-if="bDayCake"/>
      <SuitCaseSvg v-if="suitCase"/>
      <LetterSvg v-if="letter"/>
      <ArrowRightClosingBracketSvg v-if="arrowRight"/>
    </div>

    <span class="text" v-if="isLink"><a :href="url">{{info}}</a></span>
    <span class="text" v-else>{{info}}</span>

  </div>
</template>

<script setup>

import {ref} from "vue";
import HouseSvg from "../../svgs/HouseSvg.vue";
import LetterSvg from "../../svgs/LetterSvg.vue";
import BirthdayCakeSvg from "../../svgs/BirthdayCakeSvg.vue";
import SuitCaseSvg from "../../svgs/SuitCaseSvg.vue";
import ArrowRightClosingBracketSvg from "../../svgs/ArrowRightClosingBracketSvg.vue";

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
.personalDetailContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 32px 0;
}

.text {
  font-size: 20px;
  font-weight: 500;
}

.svg-container {
  color: #3f51b5;
  line-height: 0;

  svg {
    min-width: 48px;
  }
}


</style>
