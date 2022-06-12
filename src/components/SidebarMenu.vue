<template>
  <div class="sidebar-menu">
    <div class="categories">
      <h4>Cloths</h4>
      <div v-for="category in state.categories" :key="category.id" class="item">
        <span class="item-name">{{ category.name }}</span>
        <div v-for="children in category.children" :key="children.id">
          <span class="item-name child">{{ children.name }}</span>
        </div>
      </div>
    </div>
    <div class="recent-products">
      <h4>Recent viewed products</h4>
      <span>Your most recent products will be shown here</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import api from '@/api'
import Category from '@/types/Category'

const state = reactive({
  categories: [] as Category[]
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
</script>
<style scoped>
.sidebar-menu {
  margin-top: -21px;
  text-align: left;
  padding-right: 20px;
}
.item {
  cursor: pointer;
  margin-bottom: 8px;
}
.item span {
  font-size: 16px;
}
.child {
  margin-left: 8px;
  font-size: 14px !important;
}
</style>
