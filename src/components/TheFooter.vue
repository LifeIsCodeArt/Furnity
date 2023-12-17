<script setup>
import {useMenuItemsStore} from '../stores/menuStore.js'

import {computed} from "vue";
import TheNavigation from '../components/TheNavigationLinks.vue'

const store = useMenuItemsStore()
const items = computed(()=> store.MenuItemsFooter)
</script>

<template>

  <div class="margin min-w-[90rem] bg-[#19191B] max-xl:min-w-[69rem] max-lg:min-w-[39rem] max-sm:min-w-[39rem] border border-green-400">
    <div class="bg-inherit container w-[90rem] px-[2.5rem] flex items-center justify-between max-xl:min-w-[69rem] max-lg:min-w-[38.87rem] max-xl:left-0 max-xl:px-[2.5rem] 2xl:px-[7.5rem] max-sm:w-0">
      <div class="flex justify-center items-center">
        <img src="@/assets/icons/Ellipse.png" alt="" class="mr-[0.5rem] w-[2.09rem] h-[1.125rem]">
        <p class="text-[1.125rem] text-[#1D1F23] leading-[3.75rem] tracking-[0.035rem] text-white font-oswald">Furnity.</p>
      </div>
      <nav class="">
        <ul class="flex text-white w-[22rem] justify-between ">
          <TheNavigation v-for="item in items" :key="item.id" :nav="item"></TheNavigation>
        </ul>
      </nav>
      <div class="flex text-white max-xl:hidden">
        © 2020 Furnity, All Rights Reserved
      </div>
    </div>
  </div>

</template>

<style scoped>
.container{
  margin: 0 auto;
  max-height: 5rem;
}
.margin{
  margin: 0 auto;
}

</style>