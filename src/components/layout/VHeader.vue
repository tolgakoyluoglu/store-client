<template>
  <nav class="navbar bg-1">
    <div class="container d-flex">
      <div class="items">
        <router-link to="/products">
          <li>Shop</li>
        </router-link>
        <router-link to="/admin"> <li>Admin</li></router-link>
      </div>
      <div class="items">
        <router-link to="/">
          <h1 class="m-0">Store</h1>
        </router-link>
      </div>
      <div class="items">
        <router-link to="/login">
          <li>Login</li>
        </router-link>
        <li>
          <span class="material-icons pointer">shopping_cart</span>
        </li>
      </div>
    </div>
  </nav>
  <nav class="responsive bg-1">
    <div class="navbar">
      <span @click="showMenu = !showMenu" class="material-icons pointer">menu</span>
      <router-link to="/">
        <h1 class="m-0" @click="showMenu = false">Store</h1>
      </router-link>
      <li>
        <span class="material-icons pointer">shopping_cart</span>
      </li>
    </div>
    <div v-if="showMenu" class="list-items" @click="showMenu = false">
      <router-link to="/products">
        <li>Shop</li>
      </router-link>
      <router-link to="/admin">
        <li>Admin</li>
      </router-link>
      <router-link to="/login">
        <li>Login</li>
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
</script>
<style scoped lang="postcss">
/* Desktop version */
.navbar {
  padding: 16px;
  display: none;
}
/* Responsive menu */
.responsive {
  display: block;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-items {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 200px;
    text-align: center;
    margin-left: -5px;
    a {
      font-size: 1.5rem;
    }
  }
}
li {
  list-style: none;
  margin: 0 5px;
}
a {
  font-weight: 700;
  font-size: 1.2rem;
  color: #2c3e50;
  text-decoration: none;
}
.material-icons {
  font-size: 1.6rem;
  margin-right: 20px;
}
a.router-link-exact-active {
  color: #7f56d9;
}

/* Desktop version */
@media screen and (min-width: 60em) {
  .responsive {
    display: none;
  }
  .navbar {
    display: block;

    .container {
      margin: auto;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
    }
    .items {
      display: flex;
    }
  }
}
</style>
