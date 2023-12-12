<script setup>
import {defineProps} from "vue";
const props = defineProps({
  nav: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <li class="w-auto"><a href="" class="text-[0.875rem] leading-[3.75rem] tracking-[0.035rem] font-light ">{{nav.name}}</a></li>
</template>

<style scoped>

</style>