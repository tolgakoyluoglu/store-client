<template>
  <div>
    <h1>Admin</h1>
  </div>
  <div class="container d-flex-center">
    <div class="create">
      <div>
        <h2>Create Product</h2>
      </div>
      <div>
        <div class="inputs">
          <VInput v-model="state.product.name" placeholder="Name" />
          <VInput v-model="state.product.description" placeholder="Description" />
          <VInput v-model="state.product.price" placeholder="Price" />
          <VInput v-model="state.product.stock" placeholder="Stock" />
          <VSelect :options="state.categories" placeholder="Category" name="name" @input="selectCategory" />
          <VInput v-model="state.product.image" placeholder="Image url" />
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
          <VInput v-model="state.category.name" placeholder="Name" />
          <VInput v-model="state.category.description" placeholder="Description" />
          <VSelect :options="state.categories" placeholder="Parent Category" @input="selectCategory" name="name" />
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
import VSelect from '@/components/forms/VSelect.vue'
import Category from '@/types/Category'

const state = reactive({
  product: {
    name: '' as string,
    description: '' as string,
    price: 0 as number,
    stock: 0 as number,
    category_id: '' as string,
    image: '' as string
  },
  category: {
    name: ref<string>(''),
    description: ref<string>(''),
    parent_id: ref<number>()
  },
  selectedCategory: {} as Category,
  categories: [] as Category[]
})

onMounted(() => {
  getCategories()
})

function selectCategory(category: Category) {
  state.selectedCategory = category
}
async function createProduct() {
  try {
    const { name, description, price, stock, image } = state.product
    if (!name || !description || !price || !stock || !image || !state.selectedCategory) {
      return console.log('Error')
    }
    await api.post('/products', { ...state.product, category_id: state.selectedCategory.id })
  } catch (error) {
    console.log(error)
  }
}

async function createCategory() {
  try {
    const { name, description } = state.category
    if (!name || !description) return console.log('Error')

    await api.post('/categories', { ...state.category, parent_id: state.selectedCategory.id })
    getCategories()
  } catch (error) {
    console.log(error)
  }
}
async function getCategories() {
  try {
    const response = await api.get('/categories')
    state.categories = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped>
.create {
  margin: 0 2rem;
  width: 500px;
}
</style>
