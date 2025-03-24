<template>
  <div class="library">
    <div v-for="book in books">
      <OneBook :book="book"/>
    </div>
  </div>
</template>

<script>
import OneBook from "@/components/OneBook.vue";

export default {
  name: 'Library',
  components: {OneBook},
  props: {
    books: Array
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
