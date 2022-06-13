<template>
  <div class="product pointer" v-for="product in products" :key="product.id">
    <div class="product-image bg-1"></div>
    <div class="product-info">
      <h4 class="m-0">{{ product.name }}</h4>
      <span>{{ product.price }} kr </span>
    </div>
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
  margin-top: 24px;
  border-radius: 12px;
}
.product-info {
  text-align: left;
  margin-top: 8px;
  font-size: 14px;
}
@media screen and (min-width: 900px) {
  .product-image {
    width: 250px;
    height: 320px;
  }
}
</style>
