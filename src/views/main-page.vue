<script setup>
  import TheHeader from '@/components/TheHeader.vue'
  import TheBenefits from "@/components/TheBenefit.vue";
  import TheChair from  '@/components/сhairCollectionItem.vue'
  import CollectionItem from '@/components/collectionMenuItem.vue'

  import {useCollectionItemsStore} from '@/stores/itemsStore.js'
  import {computed, ref} from "vue";
  import TheFooter from "@/components/TheFooter.vue";

  const activeSection = ref(1)
  const itemsStore = useCollectionItemsStore()

  const benefitItems = computed(()=> itemsStore.benefitsCollection)

  const chairItems = computed(()=> itemsStore.chairCollectionItems)
  const firstChairItems = computed(()=>itemsStore.chairCollectionItems.filter((item) => item.id < 5));

  const itemsCollections = computed(()=> itemsStore.menuTags)
</script>

<template>

  <div class="min-w-[90rem] max-xl:w-0 w-[90rem] h-auto centralMargin  max-xl:min-w-[69rem] max-lg:min-w-[49rem] max-sm:min-w-[39rem] max-mobileL:min-w-[20rem]">
      <section class="bg-mainImage centralMargin h-[60rem] min-w-[90rem]  bg-cover bg-right bg-no-repeat font-bold max-xl:min-w-[69rem] max-lg:min-w-[49rem] max-sm:min-w-[39rem] max-mobileL:min-w-[20rem]">
          <div class="mb-[7rem]">
              <TheHeader/>
          </div>
          <div class="flex flex-col items-center">
              <div class="">
                  <p class="text-[3rem] leading-[3.75rem] max-lg:text-[2rem] max-lg:text-center max-mobileL:text-[1.5rem] max-mobileL:leading-[2rem]">Offer products to make your interior <span class="text-[#F6973F] font-semibold">Minimalist.</span></p>
              </div>

              <div class="mb-[1.25rem] mt-[0.63rem] text-[1.125rem] max-sm:text-center max-mobileL:text-[0.825rem] max-mobileL:mt-[1.2rem] max-mobileL:mb-[12rem]">
                  <p class="">
                      we have helped more than 1000+ people to give perfect comfort to the interior of their home
                  </p>
              </div>

              <button class="w-44 h-14 flex justify-center items-center bg-orange-400 rounded-3xl text-center text-white text-lg font-bold font-['Jost'] leading-10 max-mobileL:w-28 max-mobileL:h-10 max-mobileL:text-sm">
                  Find Product
              </button>

          </div>
      </section>

      <section class="h-[67.5rem] min-w-[90rem] relative max-xl:min-w-[69rem] max-lg:h-[84.5rem] max-lg:min-w-[49rem]  max-sm:min-w-[39rem] max-mobileL:min-w-[20rem] max-mobileL:h-auto">
          <div class="absolute top-[-30.5rem] left-5 grid grid-cols-4 gap-4 w-full px-[7.5rem] max-xl:px-[2.5rem] max-xl:left-0 max-sm:px-0 max-mobileL:grid-cols-2 max-mobileL:gap-20 max-mobileL:left-0 max-mobileL:top-[-46.5rem]">
              <TheChair v-for="item in firstChairItems" :key="item.id" :item="item"/>
          </div>
          <div class="mt-[20.5rem] flex justify-between px-[7.5rem] max-xl:px-[2.5rem] max-lg:flex-col max-mobileL:mt-[30.5rem]  ">
              <div class="grid grid-cols-2 gap-8 max-mobileL:grid-cols-1 max-mobileL:gap-4">
                  <TheBenefits v-for="item in benefitItems" :key="item.id" :item="item"/>
                  <button class="w-44 h-14 bg-rose-500 rounded-3xl text-center text-white text-lg font-bold font-['Jost'] leading-10">
                      Start Shopping
                  </button>
              </div>
              <div class="max-lg:mt-[3rem] max-lg:flex max-lg:items-center max-lg:justify-center">
                  <img src="../assets/images/white-chair.png" alt="" class="">
             </div>

          </div>
      </section>
      <section class="min-w-[90rem] max-xl:min-w-[69rem] max-lg:min-w-[49rem] max-sm:min-w-[39rem] max-mobileL:min-w-[20rem]">

          <div class="flex flex-col justify-center items-center">

              <div class="w-[42rem] text-center text-zinc-900 text-5xl font-bold font-['Jost'] text-[3rem] max-sm:w-[32rem] max-mobileL:w-full max-mobileL:text-[1.5rem] max-mobileL:mt-[1rem]">
                  Various collections of furniture to fill your interior
              </div>

              <div class="w-[33.43rem] text-center text-zinc-900 text-opacity-70 text-lg font-normal font-['Jost'] mt-[1.2rem] mb-[3.7rem] max-mobileL:w-[18rem]">
                  We provide a variety of goods with the best quality for you to find the right one to meet your interior needs
              </div>
         </div>
      </section>

      <section class="min-w-[90rem] max-xl:min-w-[69rem] max-lg:min-w-[49rem] max-sm:min-w-[39rem] max-mobileL:min-w-[20rem]">
              <div class="flex flex-col justify-center items-center mb-[7.13rem] ">
                  <ul class="flex max-mobileL:grid max-mobileL:grid-cols-3 max-mobileL:gap-8">
                      <CollectionItem v-for="item in itemsCollections" :key="item.id" :tag="item"
                              :class="{'disabled:cursor-not-allowed text-white pointer-events-none bg-black font-semibold  pointer-events:none':activeSection === item.id,
                            'bg-inherit font-normal':activeSection !== item.id}" @click="activeSection = item.id"/>
                  </ul>
              </div>
          <div class="grid gap-8 grid-cols-4 px-[7rem] max-xl:px-[2.5rem] max-sm:px-0 max-mobileL:gap-20 max-mobileL:grid-cols-2">
              <TheChair v-for="item in chairItems" :key="item.id" :item="item"/>
          </div>
      </section>

      <section class="min-w-[90rem]  h-[37.62rem] bg-[#19191B] py-[4.37rem] px-[7.5rem] flex max-xl:min-w-[69rem] max-xl:px-[2.5rem] max-lg:min-w-[49rem] max-sm:min-w-[39rem] max-sm:flex-col max-sm:h-[67.62rem] max-mobileL:h-[46.32rem] max-mobileL:py-0 max-mobileL:min-w-[20rem] max-mobileL:px-0">

          <div class="my-[3.12rem] mr-[12.3rem] max-sm:mr-0 max-sm:text-center">
              <h1 class="text-[3rem] font-semibold leading-normal text-white max-mobileL:text-[1.4rem]">
                  What are they saying ?
              </h1>

              <div class="">
                  <div class="flex mt-[3.2rem] mb-[1.25rem] max-mobileL:items-center max-sm:justify-center">
                      <div class="mr-[0.94rem]">
                          <img src="../assets/images/Customers/customer_1.png" alt="" class="">
                      </div>

                      <div class="flex flex-col  items-col justify-between ">

                        <p class="text-white font-semibold text-[1.125rem]">
                            Jane Lowis
                        </p>

                        <p class="text-[0.875rem] text-gray-400">
                            Housewife
                        </p>

                      </div>
                  </div>
                  <div class="w-[24rem] text-white text-[1.125rem] mb-[1.88rem] max-mobileL:w-[17rem] max-mobileL:text-center max-sm:w-full">
                      the services and products offered are very good, matched what I was looking for. now my room is more beautiful and aesthetic.
                  </div>

                  <div class="flex max-mobileL:items-center max-sm:justify-center">
                      <div class="w-12 h-12 mr-[1.25rem] bg-zinc-800 rounded-full flex items-center justify-center text-[#FFFFFF]">
                          <img src="../assets/icons/button-icons/chevron-right.png" alt="" class="rotate-[180deg]">
                      </div>

                      <div class="w-12 h-12 bg-[#EF4358] rounded-full flex items-center justify-center text-[#FFFFFF]">
                          <img src="../assets/icons/button-icons/chevron-right.png" alt="" class="">
                      </div>
                  </div>
              </div>
          </div>

          <div class="max-sm:flex max-sm:justify-center">
              <img src="../assets/images/block-4.png" alt="" class="">
          </div>

      </section>

      <section class="h-[37.6rem] px-0 flex justify-around items-center max-xl:justify-between max-xl:px-[2.5rem]  max-sm:flex-col max-sm:h-[28.6rem] max-sm:justify-around max-mobileL:justify-center">
          <div class="w-[45.43rem] text-[3rem] text-[#1D1F23] font-semiboldbold max-sm:w-[25.43rem] max-sm:text-[2.5rem] max-sm:text-center max-mobileL:text-[1.8rem] max-mobileL:w-[19rem] max-mobileL:pb-[2rem]">
              Contact us if you need anything, we are ready to serve you
          </div>

          <button class="w-44 h-14 flex justify-center items-center bg-orange-400 rounded-3xl text-center text-white text-lg font-normal font-['Jost'] leading-10">
              Find Product
          </button>
      </section>

      <TheFooter/>
  </div>

</template>

<style scoped>
.centralMargin{
  margin: 0 auto;
}
</style>