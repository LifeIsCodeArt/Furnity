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
  <div class="w-64 h-[27.6rem] bg-white rounded-2xl flex flex-col mb-[1.4rem]">
      <div class="flex items-center justify-center pb-[3.2rem] h-[14.9rem] bg-[#FAFAFA] rounded-t-2xl">
          <img :src="item.imageLink" alt="" class="absolute">
      </div>

      <div class="px-[1.33rem]">
          <div class="flex flex-col">

          </div>

          <div class="">
              <div class="">
                  <p class="text-[1.05rem] text-[#8D8D8D]">
                      {{item.label}}
                  </p>

                  <p class="text-[1.33rem] text-[#1D1F23] font-semibold">
                      {{item.text}}
                  </p>
              </div>

              <div class="flex justify-between items-center mt-[1.87rem]">
                  <p class="text-[#1D1F23] text-[1.33rem] font-semibold before:content-['$']">
                      {{item.price}}
                  </p>

                  <button class="w-12 h-12 p-3 bg-orange-400 rounded-3xl justify-start items-start gap-4 inline-flex">
                      <img src="../assets/icons/plus-but.png" alt="" class="">
                  </button>

              </div>
          </div>
      </div>

  </div>
</template>

<style scoped>

</style>