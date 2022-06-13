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
