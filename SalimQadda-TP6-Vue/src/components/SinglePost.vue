<script>
export default{
  name: "SinglePost",
  props: {
    post: Object
  },
  methods: {
    goToDetails() {
      this.$router.push({name: 'PostDetail', params: {id: this.post.id}})
    }
  }
}
</script>

<template>
  <div class="single-post">
    <h2>{{post.titre}}</h2>
    <p>
      {{post.article.substring(0, 50)}}
    </p>
    <button @click="goToDetails">Read more</button>
  </div>
</template>

<style scoped>
.single-post {
  border-radius: 4px;
  padding: 1rem;
  background-color: #b1afaf;
  margin-bottom: 1rem;
}

.single-post h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}



.single-post p {
  margin: 0;
}
</style>