<script setup lang="ts">
import { ref } from "vue";
import Ticker from '@/components/Ticker.vue';


const price = ref(50000)

setInterval(() => {
  price.value++
}, 1000)
</script>

<template>
  <Ticker :price="price"></Ticker>
</template>