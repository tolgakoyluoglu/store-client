<template>
  <div class="sidebar-menu">
    <div class="categories">
      <h3>Cloths</h3>
      <div v-for="category in state.categories" :key="category.id" class="item">
        <span @click="category.isActive = !category.isActive" class="item-name">{{ category.name }}</span>
        <div v-if="category.isActive">
          <div v-for="children in category.children" :key="children.id" class="item">
            <span @click="getProducts(children.id)" class="item-name child">{{ children.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="recent-products">
      <h3>Recent viewed products</h3>
      <span>Your most recent products will be shown here</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import api from '@/api'
import Category from '@/types/Category'

const state = reactive({
  categories: [] as Category[],
  collapse: false
})

onMounted(() => {
  getCategories()
})
const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    state.categories = response.data
  } catch (error) {
    console.log(error)
  }
}
const getProducts = async (category_id: string) => {
  try {
    const response = await api.get(`/products/${category_id}`)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped>
.sidebar-menu {
  margin-top: -21px;
  text-align: left;
  padding-right: 20px;
}
.item {
  cursor: pointer;
  margin: 8px 0;
}
.item-name {
  user-select: none;
  font-size: 16px;
}
.child {
  margin-left: 8px;
  font-size: 14px;
}
</style>
