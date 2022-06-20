<template>
  <div class="admin-view">
    <h1>Admin</h1>
    <div class="tables">
      <VDataTable :tableData="categories" />
      <VButton @click="categoryModal = true">Create Category</VButton>
      <VDataTable :tableData="products" />
      <VButton @click="productModal = true">Create Product</VButton>
    </div>
    <VModal :show="categoryModal" @close="categoryModal = false">
      <template #header>
        <h2 class="m-0">Create Category</h2>
      </template>
      <template #body>
        <div class="inputs">
          <VInput v-model="category.name" placeholder="Name" />
          <VInput v-model="category.description" placeholder="Description" />
          <VSelect
            :options="categories"
            placeholder="Parent Category"
            @input="() => setParentCategory(category)"
            name="name"
          />
        </div>
      </template>
      <template #footer>
        <VButton @click.prevent="createCategory">Create</VButton>
      </template>
    </VModal>
    <VModal :show="productModal" @close="productModal = false">
      <template #header>
        <h2 class="m-0">Create Product</h2>
      </template>
      <template #body>
        <div class="inputs">
          <VInput v-model="product.name" placeholder="Name" />
          <VInput v-model="product.description" placeholder="Description" />
          <VInput v-model="product.price" placeholder="Price" />
          <VInput v-model="product.stock" placeholder="Stock" />
          <VSelect :options="categories" placeholder="Category" name="name" @input="setSelectedCategory(category)" />
          <VInput v-model="product.image" placeholder="Image url" />
          <VInput v-model="product.size" placeholder="Size" />
          <VInput v-model="product.color" placeholder="Color" />
        </div>
      </template>
      <template #footer>
        <VButton @click.prevent="createProduct">Create</VButton>
      </template>
    </VModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VInput from '@/components/forms/VInput.vue'
import VButton from '@/components/forms/VButton.vue'
import VSelect from '@/components/forms/VSelect.vue'
import { useProduct } from '@/composables/useProduct'
import { useCategory } from '@/composables/useCategory'
import VDataTable from '@/components/VDataTable.vue'
import VModal from '@/components/VModal.vue'

const { getProducts, createProduct, setSelectedCategory, product, products } = useProduct()
const { getAllCategories, setParentCategory, setCategory, createCategory, categories, category } = useCategory()
const categoryModal = ref(false)
const productModal = ref(false)

onMounted(() => {
  getAllCategories()
  getProducts()
})
</script>
<style scoped lang="postcss">
.admin-view {
  padding: 16px;
  h1 {
    margin-top: 0;
  }
}
.tables {
  .v-button {
    margin-bottom: 32px;
  }
}
</style>
