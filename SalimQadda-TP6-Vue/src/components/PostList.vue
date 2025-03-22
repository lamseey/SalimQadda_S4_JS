<script>
  import SinglePost from "@/components/SinglePost.vue";
  import TagCloud from "@/components/TagCloud.vue";

  export default{
    name: "PostList",
    components: {
      TagCloud,
      SinglePost
    },
    props: {
      posts: Array
    }
  }
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <SinglePost :post="post"></SinglePost>
      <TagCloud :tags="post.tags"></TagCloud>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.post-item {
  border: 1px solid #b5b4b4;
  border-radius: 4px;
  padding: 1rem;
  background-color: #b1afaf;
}
</style>