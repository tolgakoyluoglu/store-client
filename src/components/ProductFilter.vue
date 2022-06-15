<template>
  <div class="product-filter">
    <VSelect placeholder="Size" :options="sizes" @input="((value: string) => size = value)" />
    <VSelect placeholder="Color" :options="colors" @input="(value: string) => color = value" />
    <VSelect placeholder="Price" :options="prices" @input="(value: string) => price = value" />
    <VSelect placeholder="Sort" :options="sortOptions" @input="(value: string) => sortOption = value" />
  </div>
</template>
<script setup lang="ts">
import VSelect from './forms/VSelect.vue'
import { ref } from 'vue'

const sizes = ['XS', 'S', 'M', 'L', 'XL']
const colors = ['White', 'Black', 'Red', 'Blue', 'Yellow', 'Purple', 'Orange', 'Gray']
const prices = ['< 100', '< 250', '< 500', '< 750']
const sortOptions = ['Newest', 'Price Asc', 'Price Desc']

const size = ref('')
const color = ref('')
const price = ref('')
const sortOption = ref('')
</script>
<style scoped>
.product-filter {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  min-width: 100%;
  justify-content: center;
}
.v-select {
  width: 150px;
  margin-top: 0;
}
@media screen and (min-width: 960px) {
  .product-filter {
    grid-gap: 16px;
    margin-right: 20px;
    justify-content: flex-start;
  }
}
</style>
