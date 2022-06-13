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
</template>
<script></script>
<style scoped lang="postcss">
.navbar {
  padding: 24px;
  a {
    font-weight: 700;
    font-size: 18px;
    color: #2c3e50;
    text-decoration: none;
  }
  .container {
    margin: auto;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
  }
  .items {
    display: flex;
    li {
      list-style: none;
      margin: 0 5px;
    }
  }
}
.material-icons {
  font-size: 26px;
  margin-right: 20px;
}
.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
