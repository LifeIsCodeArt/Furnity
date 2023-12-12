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
  <div class="w-[14.5rem] flex flex-col items-start bg-inherit mb-[3.7rem]">

      <div class="">
          <img :src="item.imageLink" alt="" class="">
      </div>

      <div class="text-[#1D1F23] text-[1.5rem] font-semibold mt-[0.94rem] mb-[0.2rem]">
          {{item.label}}
      </div>

      <div class="text-[#1D1F23] text-[1.125rem] font-normal">
          {{item.text}}
      </div>

  </div>
</template>

<style scoped>

</style>