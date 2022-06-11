<template>
  <div class="product-filter">
    <VSelect
      placeholder="Size"
      :options="[
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' }
      ]"
    />
    <VSelect
      placeholder="Brand"
      :options="[
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' }
      ]"
    />
    <VSelect
      placeholder="Price"
      :options="[
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' }
      ]"
    />
    <VSelect
      placeholder="Sort"
      :options="[
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' }
      ]"
    />
  </div>
</template>
<script setup lang="ts">
import VSelect from './forms/VSelect.vue'
</script>
<style>
.product-filter {
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media screen and (min-width: 720px) {
  .product-filter {
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 20px;
  }
  .v-select {
    margin-right: 20px;
  }
}
</style>
