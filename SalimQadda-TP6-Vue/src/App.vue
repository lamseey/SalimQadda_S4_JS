<template>
  <nav>
    <NavBar></NavBar>
  </nav>
  <router-view/>
</template>

<style>

</style>
<script>
import NavBar from "@/components/NavBar.vue"

export default{
  name: "App",
  components: {
    NavBar
  }
}
</script>