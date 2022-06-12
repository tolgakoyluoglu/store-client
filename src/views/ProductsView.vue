<template>
  <img class="banner" src="../../resources/images/sale.jpeg" />
  <div class="container d-flex">
    <div class="left-menu">
      <SidebarMenu />
    </div>
    <div class="right-content d-flex">
      <h1 class="mt-0">All Products</h1>
      <ProductFilter />
      <div class="products-list">
        <ProductCard :products="products" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '@/api'
import SidebarMenu from '@/components/SidebarMenu.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import ProductCard from '@/components/ProductCard.vue'
import Product from '@/types/Product'
import Category from '@/types/Category'

const products = ref<Product>()
const categories = ref<Category>()

onMounted(() => {
  getAllProducts()
  getAllCategories()
})
async function getAllProducts() {
  try {
    const response = await api.get('/products')
    products.value = response.data
  } catch (error) {
    console.log(error)
  }
}
async function getAllCategories() {
  try {
    const response = await api.get('/categories')
    categories.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.products-list {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 2px;
}
.left-menu {
  display: none;
}
.banner {
  width: 100%;
}
@media screen and (min-width: 1100px) {
  .left-menu {
    min-width: 20%;
    display: block;
  }
  .container {
    padding: 16px 0;
    margin: auto;
  }
  .right-content {
    width: 80%;
  }
}
@media screen and (min-width: 720px) {
  .products-list {
    grid-gap: 16px;
    justify-content: space-between;
  }
  .right-content {
    flex-direction: column;
  }
  .v-select {
    margin-right: 20px;
  }
  h1 {
    text-align: left;
  }
}
</style>
