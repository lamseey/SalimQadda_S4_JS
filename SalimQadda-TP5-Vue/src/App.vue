<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Ajouter un job</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  margin-left: 1em;
  font-weight: bold;
  color: #0027a6;
}

nav a.router-link-exact-active {
  color: #9900ff;
}
</style>
<script setup lang="ts">
</script>