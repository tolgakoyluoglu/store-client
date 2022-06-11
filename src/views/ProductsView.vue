<template>
  <div class="container">
    <div></div>
    <div class="wrapper">
      <div class="left-menu">
        <SidebarMenu />
      </div>
      <div class="products-wrapper">
        <h1>Products</h1>
        <ProductFilter />
        <div class="products">
          <div class="product" v-for="product in products" :key="product.id">
            <h4>{{ product.name }}</h4>
            <img class="product-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { onMounted, ref } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import ProductFilter from '@/components/ProductFilter.vue'

const products = ref<any>([])
const categories = ref<any>([])

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
.product-image {
  width: 250px;
  height: 320px;
}
.products {
  min-width: 100%;
}
.left-menu {
  display: none;
}
h1 {
  margin-top: 0;
}
@media screen and (min-width: 1100px) {
  .left-menu {
    min-width: 20%;
    display: block;
  }
  .container {
    max-width: 1800px;
    padding: 0 20px;
    margin: auto;
  }
  .wrapper {
    display: flex;
  }
  .products-wrapper {
    width: 80%;
  }
}
@media screen and (min-width: 720px) {
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 1rem;
    justify-content: space-between;
  }
  .products-wrapper {
    display: flex;
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
