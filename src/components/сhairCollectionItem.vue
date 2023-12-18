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
  <div class="w-64 h-[27.6rem] bg-white rounded-2xl flex flex-col mb-[1.4rem] max-xl:w-48 max-lg:w-32 max-mobileL:w-28 max-mobileL:h-[15.5rem]">
      <div class="flex items-center justify-center pb-[3.2rem] h-[14.9rem] bg-[#FAFAFA] rounded-t-2xl max-mobileL:pb-0">
          <img :src="item.imageLink" alt="" class="absolute max-lg:w-32">
      </div>

      <div class="px-[1.33rem] max-mobileL:mt-[1.87rem]">

          <div class="">
              <div class="">
                  <p class="text-[1.05rem] text-[#8D8D8D] max-lg:text-[0.875rem] max-mobileL:text-[0.75rem] max-mobileL:text-center max-mobileL:py-[1rem]">
                      {{item.label}}
                  </p>

                  <p class="text-[1.33rem] text-[#1D1F23] font-semibold max-lg:text-[1.1rem] max-mobileL:text-[0.95rem] max-mobileL:text-center">
                      {{item.text}}
                  </p>
              </div>

              <div class="flex justify-between items-center mt-[1.87rem] max-mobileL:mb-[0.8rem]">
                  <p class="text-[#1D1F23] text-[1.33rem] font-semibold before:content-['$'] max-lg:text-[1rem] max-mobileL:text-[1rem]">
                      {{item.price}}
                  </p>

                  <button class="w-12 h-12 p-3 bg-orange-400 rounded-3xl justify-start items-start  inline-flex max-lg:w-8 max-lg:h-8 max-lg:p-1 max-mobileL:p-3 max-mobileL:w-4 max-mobileL:h-4">
                      <img src="../assets/icons/plus-but.png" alt="" class="max-lg:w-6 max-lg:h-6">
                  </button>

              </div>
          </div>
      </div>

  </div>
</template>

<style scoped>

</style>