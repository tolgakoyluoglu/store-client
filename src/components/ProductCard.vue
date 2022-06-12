<template>
  <div v-for="product in products" :key="product.id">
    <h4>{{ product.name }}</h4>
    <div class="product-image bg-1"></div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  products: {
    type: Object
  }
})
</script>
<style scoped>
.product-image {
  width: 200px;
  height: 280px;
}
@media screen and (min-width: 900px) {
  .product-image {
    width: 250px;
    height: 320px;
  }
}
</style>
