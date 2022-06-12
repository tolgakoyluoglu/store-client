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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 500;
}
body,
html {
  padding: 0;
  margin: 0;
}
.bg-1 {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
}
.bg-2 {
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.page-container {
  max-width: 1600px;
  padding: 16px;
  margin: auto;
  min-height: calc(100vh - 70px);
}
</style>
