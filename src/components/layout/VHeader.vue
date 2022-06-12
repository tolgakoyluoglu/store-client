<template>
  <nav class="navbar bg-1">
    <div class="container">
      <div class="items">
        <router-link to="/products">Shop</router-link> |
        <router-link to="/admin">Admin</router-link>
      </div>
      <div class="items">
        <router-link to="/">
          <h1>Store</h1>
        </router-link>
      </div>
      <div class="items">
        <router-link to="/login">Login</router-link> |
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style scoped>
.navbar {
  padding: 24px;
}
.container {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1600px;
}
h1 {
  margin: 0;
}

.navbar a {
  font-weight: 700;
  font-size: 18px;
  color: #2c3e50;
}

.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
