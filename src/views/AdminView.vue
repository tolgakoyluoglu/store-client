<template>
  <div>
    <h1>Admin</h1>
  </div>
  <div class="d-flex-center">
    <div class="create">
      <div>
        <h2>Create Product</h2>
      </div>
      <div>
        <div class="inputs">
          <VInput v-model="product.name" placeholder="Name" />
          <VInput v-model="product.description" placeholder="Description" />
          <VInput v-model="product.price" placeholder="Price" />
          <VInput v-model="product.stock" placeholder="Stock" />
          <VSelect :options="categories" placeholder="Category" name="name" @input="selectCategory" />
          <VInput v-model="product.image" placeholder="Image url" />
          <VInput v-model="product.size" placeholder="Size" />
          <VInput v-model="product.color" placeholder="Color" />
        </div>
        <VButton @click.prevent="createProduct">Add</VButton>
      </div>
    </div>
    <div class="create">
      <div>
        <h2>Create Category</h2>
      </div>
      <div>
        <div class="inputs">
          <VInput v-model="category.name" placeholder="Name" />
          <VInput v-model="category.description" placeholder="Description" />
          <VSelect
            :options="categories"
            placeholder="Parent Category"
            @input="() => setCategory(category)"
            name="name"
          />
        </div>
        <VButton @click.prevent="createCategory">Add</VButton>
      </div>
    </div>
  </div>
  <div class="">
    <div class="list">
      <h2>Products</h2>
      <div class="product" v-for="product in products" :key="product.id">
        {{ product.name }}
      </div>
    </div>
    <div class="list">
      <h2>Categories</h2>
      <div class="category" v-for="category in categories" :key="category.id" @click="() => setCategory(category)">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import VInput from '@/components/forms/VInput.vue'
import VButton from '@/components/forms/VButton.vue'
import VSelect from '@/components/forms/VSelect.vue'
import Category from '@/types/Category'
import { useProduct } from '@/composables/useProduct'
import { useCategory } from '@/composables/useCategory'

const { getProducts, createProduct, product, products } = useProduct()
const { getAllCategories, categories, category, setCategory, createCategory } = useCategory()

onMounted(() => {
  getAllCategories()
  getProducts()
})

function selectCategory(category: Category) {
  setCategory(category)
}
</script>
<style scoped>
.create {
  margin: 0 2rem;
  width: 500px;
}
.list {
  margin-right: 16px;
  margin-top: 32px;
}
</style>
