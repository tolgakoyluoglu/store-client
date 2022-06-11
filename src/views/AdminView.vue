<template>
  <div>
    <h1>Admin</h1>
  </div>
  <div class="container">
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
          <VInput v-model="product.category_id" placeholder="Category ID" />
          <VInput v-model="product.image" placeholder="Image url" />
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
          <VInput v-model="category.parent_id" placeholder="Parent ID" />
        </div>
        <VButton @click.prevent="createCategory">Add</VButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import VInput from '@/components/forms/VInput.vue'
import VButton from '@/components/forms/VButton.vue'
import { ref, reactive, onMounted } from 'vue'
import api from '@/api'

const product = reactive({
  name: ref<string>(''),
  description: ref<string>(''),
  price: ref<number>(),
  stock: ref<number>(),
  category_id: ref<number>(),
  image: ref<string>()
})
const category = reactive({
  name: ref<string>(''),
  description: ref<string>(''),
  parent_id: ref<number>()
})
onMounted(() => {
  getCategories()
})

async function createProduct() {
  try {
    const { name, description, price, stock, category_id, image } = product
    if (!name || !description || !price || !stock || !category_id || !image) {
      return console.log('Error')
    }
    const response = await api.post('/products', { ...product })

    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
async function createCategory() {
  try {
    const { name, description, parent_id } = category
    if (!name || !description) {
      return console.log('Error')
    }
    const response = await api.post('/categories', { ...category })

    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
async function getCategories() {
  try {
    const response = await api.get('/categories')
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped>
.container {
  justify-content: center;
  display: flex;
}
.create {
  margin: 0 2rem;
  width: 500px;
}
</style>
