<script setup>
import {useMenuItemsStore} from '../stores/menuStore.js'

import {computed} from "vue";
import TheNavigation from '../components/TheNavigationLinks.vue'

const store = useMenuItemsStore()
const items = computed(()=> store.MenuItems)
</script>

<template>

  <div class="margin min-w-[90rem] max-xl:min-w-[64rem] max-sm:min-w-[39rem]">
    <div class="bg-inherit container w-[90rem] px-[7.5rem] flex items-center justify-between max-xl:min-w-[64rem] max-xl:px-2 max-sm:w-0 max-sm:min-w-[38.87rem]">
        <div class="flex justify-center items-center">
            <img src="@/assets/icons/Ellipse.png" alt="" class="mr-[0.5rem] w-[2.09rem] h-[1.125rem]">
            <p class="text-[1.125rem] text-[#1D1F23] leading-[3.75rem] tracking-[0.035rem] font-oswald">Furnity.</p>
        </div>
        <nav class="">
            <ul class="flex w-[32rem] justify-between max-xl:hidden">
                <TheNavigation v-for="item in items" :key="item.id" :nav="item"></TheNavigation>
            </ul>
            <button class="h-[3.2rem] flex items-center justify-center xl:hidden ">
                <img src="../assets/icons/menu.svg"  alt="" class="w-[2.2rem] h-full">
            </button>
        </nav>
        <div class="flex max-xl:hidden">
            <img src="@/assets/icons/Search.png" alt="" class="mr-[1.7rem] w-[1.125rem] h-[1.19rem]">
            <img src="@/assets/icons/Basket.png" alt="" class="w-[1.2rem] h-[1.13rem]">
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