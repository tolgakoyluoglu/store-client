<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.color }}</p>
    <p>${{ product.price }}</p>
    <img :src="product.image" :alt="product.image" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useProduct } from '@/composables/useProduct'
import { useRoute } from 'vue-router'

const { product, getProduct } = useProduct()
console.log(product)

const route = useRoute()
onMounted(() => {
  const id = route?.params?.id
  getProduct(id)
})
</script>
<style lang="postcss" scoped></style>
