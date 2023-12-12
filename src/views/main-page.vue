<script setup>
  import TheHeader from '../components/TheHeader.vue'
  import TheBenefits from "@/components/TheBenefit.vue";

  import {useCollectionItemsStore} from '@/stores/itemsStore.js'
  import {computed} from "vue";

  const itemsStore = useCollectionItemsStore()

  const benefitItems = computed(()=> itemsStore.benefitsCollection)
</script>

<template>

  <div class="min-w-[90rem] w-[90rem] h-auto centralMargin border-4 border-red-400">
      <section class="bg-mainImage centralMargin h-[60rem] min-w-[90rem] bg-cover bg-right bg-no-repeat font-bold border-4 border-black">
          <div class="mb-[7rem]">
              <TheHeader/>
          </div>
          <div class="flex flex-col items-center">
              <div class="">
                  <p class="text-[3rem] leading-[3.75rem]">Offer products to make your interior <span class="text-[#F6973F] font-semibold">Minimalist.</span></p>
              </div>

              <div class="mb-[1.25rem] mt-[0.63rem]">
                  <p class="">
                      we have helped more than 1000+ people to give perfect comfort to the interior of their home
                  </p>
              </div>

              <div class="w-44 h-14 flex justify-center items-center bg-orange-400 rounded-3xl text-center text-white text-lg font-bold font-['Jost'] leading-10">
                  Find Product
              </div>

          </div>
      </section>

      <section class="h-[62.5rem] min-w-[90rem]">
          <div class=""></div>
          <div class="mt-[20.5rem] flex justify-between px-[7.5rem]">
              <div class="grid grid-cols-2 gap-8">
                  <TheBenefits v-for="item in benefitItems" :key="item.id" :item="item"/>
                  <button class="w-44 h-14 bg-rose-500 rounded-3xl text-center text-white text-lg font-bold font-['Jost'] leading-10">
                      Start Shopping
                  </button>
              </div>
              <div class="">
                  <img src="../assets/images/white-chair.png" alt="" class="">
             </div>

          </div>
      </section>
  </div>

</template>

<style scoped>
.centralMargin{
  margin: 0 auto;
}
</style>