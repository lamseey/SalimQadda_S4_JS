<template>
  <div class="post-detail">
    <h1>Full post:</h1>
    <h2>{{myPost.titre}}</h2>
    <TagCloud :tags="myPost.tags"></TagCloud>
    <p>{{myPost.article}}</p>
  </div>
</template>

<script>
import myPosts from "@/posts.json"
import TagCloud from "@/components/TagCloud.vue";
export default{
  name: "PostDetail",
  components: {TagCloud},
  data(){
    return {
      myPost: {},
    }
  },
  created() {
    for (let post of myPosts){
      if(post.id === parseInt(this.$route.params.id)){
        this.myPost = post;
        break;
      }
    }
  }
}
</script>

<style scoped>
.post-detail {
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 800px;
  margin: 0 auto;
  word-wrap: break-word;
}

.post-detail h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.post-detail h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.post-detail p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>