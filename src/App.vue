<template>
  <VHeader />
  <div class="page-container">
    <router-view />
  </div>
  <VFooter />
</template>

<script setup lang="ts">
import VFooter from '@/components/layout/VFooter.vue'
import VHeader from './components/layout/VHeader.vue'
</script>

<style scoped>
.page-container {
  max-width: 1600px;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 70px);
}
@media screen and (min-width: 960px) {
  .page-container {
    padding: 16px;
  }
}
</style>
