<template>
  <div class="product-filter">
    <VSelect placeholder="Size" :options="sizes" @input="((value: string) => size = value)" />
    <VSelect placeholder="Brand" :options="brands" @input="(value: string) => brand = value" />
    <VSelect placeholder="Price" :options="prices" @input="(value: string) => price = value" />
    <VSelect placeholder="Sort" :options="sortOptions" @input="(value: string) => sortOption = value" />
  </div>
</template>
<script setup lang="ts">
import VSelect from './forms/VSelect.vue'
import { ref } from 'vue'

const sizes = ['XS', 'S', 'M', 'L', 'XL']
const brands = ['Levis', 'Lee', 'Replay']
const prices = ['< 100', '< 250', '< 500', '< 750']
const sortOptions = ['Newest', 'Price Asc', 'Price Desc']

const size = ref('')
const brand = ref('')
const price = ref('')
const sortOption = ref('')

const sort = () => {
  console.log('sort')
}
</script>
<style>
.product-filter {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 24px;
  margin-right: 20px;
  justify-content: center;
}
@media screen and (min-width: 720px) {
  .product-filter {
    grid-gap: 16px;
    justify-content: flex-start;
  }
}
</style>
