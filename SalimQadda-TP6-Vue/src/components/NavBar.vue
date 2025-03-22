<script>
export default {
  name: "NavBar"
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/createPost">Create Post</router-link>
  </nav>
</template>

<style>
  * {
    font-family: Arial, sans-serif;
    font-size: 105%;
    text-align: center;
  }
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  nav a {
    color: white;
    margin-right: 10px;
  }
  nav a:hover {
    text-decoration: underline;
  }
</style>