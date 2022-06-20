<template>
  <img class="banner" src="../../resources/images/sale.jpeg" />
  <div class="container d-flex-center">
    <div class="left-menu">
      <SidebarMenu @select-category="(category) => (category ? getProductsByCategory(category) : getAllProducts())" />
    </div>
    <div class="right-content">
      <h1 class="mt-0" v-if="selectedCategory && selectedCategory.name">{{ selectedCategory.name }}</h1>
      <h1 class="mt-0" v-else>All Products</h1>
      <ProductFilter />
      <div class="products-list" v-if="products && products.length">
        <ProductCard :products="products" />
      </div>
      <div v-else>
        <p>No results</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProduct } from '@/composables/useProduct'
import { useCategory } from '@/composables/useCategory'

const { getAllProducts, getProductsByCategory, products, selectedCategory } = useProduct()
const { getAllCategories } = useCategory()

onMounted(() => {
  getAllProducts()
  getAllCategories()
})
</script>

<style scoped>
.products-list {
  min-width: 100%;
  display: flex;
  flex-flow: wrap;
  grid-gap: 16px;
  justify-content: center;
}
.container {
  padding: 16px;
  margin: auto;
}
.left-menu {
  display: none;
}
.banner {
  width: 100%;
}
.right-content {
  width: 100%;
}
h1 {
  text-align: center;
}
@media screen and (min-width: 60em) {
  h1 {
    text-align: left;
  }
  .left-menu {
    min-width: 20%;
    display: block;
  }
  .left-menu {
    min-width: 20%;
    display: block;
  }
  .right-content {
    width: 80%;
  }
  .products-list {
    justify-content: flex-start;
  }
  .v-select {
    margin-right: 20px;
  }
}
</style>
