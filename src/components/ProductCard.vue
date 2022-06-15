<template>
  <div class="product pointer" v-for="product in products" :key="product.id" @click="selectProduct(product)">
    <div class="product-image bg-1">
      <img class="image" :src="product.image" />
    </div>
    <div class="product-info">
      <h4 class="m-0">{{ product.name }}</h4>
      <span>${{ product.price }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import Product from '@/types/Product'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  products: {
    type: Object
  }
})

function selectProduct(product: Product) {
  router.push(`/products/${product.id}`)
}
</script>
<style scoped>
.product {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.product-image {
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
}
.product-info {
  padding: 8px;
  text-align: left;
  font-size: 14px;
}
.image {
  width: 100%;
}

@media screen and (min-width: 690px) {
  .product-info {
    font-size: 14px;
  }
  .product {
    width: 294px;
  }
}
</style>
