<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>
  <div class="flex flex-col mb-[3rem] max-xl:w-[250px]">
    <div class="w-[16rem] h-[17.12rem] bg-[#F7F7F7]">
      <div class="h-full flex justify-center items-center">
        <img :src="item.imageLink" alt="" class="">
      </div>
      <div class="h-[2.05rem] flex justify-center items-center bg-black w-full">
        reewqfewqfewqfewqfewq
      </div>
    </div>

    <div class="font-nunito font-semibold text-[1.12rem] mt-[3rem] leading-[1.75rem] text-[#282828]">
      {{item.label}}
    </div>

    <div class="font-nunito mt-[0.6rem] font-normal text-[0.94rem] leading-[1.75rem] text-[#1E1D1D] flex justify-between">
      <div class="flex">
        <p class="text-[#737373] mr-[0.8rem]" v-show="item.oldPrice"><s>{{item.oldPrice}}</s></p>
        {{item.currentPrice}}
      </div>
      <img src="../assets/icons/Group%2018.svg" alt="" class="">
    </div>

  </div>
</template>

<style scoped>

</style>