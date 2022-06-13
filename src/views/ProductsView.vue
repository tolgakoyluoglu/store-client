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
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 2px;
  justify-content: center;
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
  text-align: left;
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
  .v-select {
    margin-right: 20px;
  }
}
</style>
