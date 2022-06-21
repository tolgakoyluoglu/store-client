<template>
  <div class="product">
    <img :src="product.image" alt="No image =)" />
    <div class="product-info">
      <div class="description">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>{{ product.color }}</p>
        <p>${{ product.price }}</p>
      </div>
      <div class="buttons">
        <VButton>Add to cart</VButton>
        <VButton>Save as favorit</VButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useProduct } from '@/composables/useProduct'
import { useRoute } from 'vue-router'
import VButton from '@/components/forms/VButton.vue'

const { product, getProduct } = useProduct()

const route = useRoute()
onMounted(() => {
  getProduct(route.params.id)
})
</script>
<style lang="postcss" scoped>
.product {
  width: 95%;
  margin: auto;
  padding-top: 8px;
  img {
    width: 100%;
  }
}

@media screen and (min-width: 60em) {
  .product {
    padding-top: 16px;
    display: flex;
    grid-gap: 16px;

    img {
      width: 50%;
    }
    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .buttons {
        margin-bottom: 16px;
      }
      h1 {
        margin-top: 16px;
      }
    }
  }
}
</style>
