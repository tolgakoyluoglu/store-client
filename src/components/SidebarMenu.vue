<template>
  <div class="sidebar-menu">
    <div class="categories">
      <h3 class="pointer" @click="$emit('select-category')">All Products</h3>
      <div v-for="category in categories" :key="category.id" class="item">
        <span @click="selectCategory(category)" class="item-name">{{ category.name }}</span>
        <div v-if="category.isActive && category.children">
          <div v-for="children in category.children" :key="children.id" class="item">
            <span @click="emit('select-category', children)" class="item-name child">{{ children.name }}</span>
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
import { onMounted, defineEmits } from 'vue'
import { useCategory } from '@/composables/useCategory'

const { getAllCategories, categories } = useCategory()
const emit = defineEmits(['select-category'])

onMounted(() => {
  getAllCategories(true)
})

const selectCategory = (category: any) => {
  // Make sure to collapse all categories before toggling the new category
  categories.value.filter((category) => {
    category.isActive = false
  })
  category.isActive = true
  emit('select-category', category)
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
  font-size: 0.875rem;
}
.child {
  margin-left: 8px;
}
</style>
