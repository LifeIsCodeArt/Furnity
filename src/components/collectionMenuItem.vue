<script setup>
import {defineProps} from "vue";
const props = defineProps({
  tag: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>
    <li  class="w-auto  px-[1.2rem] py-[0.2rem] font-light rounded-3xl leading-[3.75rem] text-[1.125rem] h-[2rem] flex justify-center items-center max-sm:px-4 max-mobileL:leading-[1rem] max-mobileL:px-1 max-mobileL:text-[0.825rem]">
        <button class="font-light">{{tag.label}}</button>
    </li>
</template>

<style scoped>

</style>