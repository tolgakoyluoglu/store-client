<template>
  <div class="sidebar-menu">
    <div class="categories">
      <h4>Cloths</h4>
      <div v-for="category in categories" :key="category.id" class="item">
        <span class="item-name">{{ category.name }}</span>
      </div>
    </div>
    <div class="recent-products">
      <h4>Recent viewed products</h4>
      <span>Your most recent products will be shown here</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const categories = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
  { id: 4, name: 'Four' }
]
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
span {
  font-size: 14px;
}
</style>
