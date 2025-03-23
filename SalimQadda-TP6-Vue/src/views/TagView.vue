<script>
import rawData from "@/posts.json"
import SinglePost from "@/components/SinglePost.vue";
import PostList from "@/components/PostList.vue";
export default{
  name: "TagView",
  components: {PostList, SinglePost},
  data() {
    return{
      posts: [],
      myposts: []
    }
  },
  watch: {
    '$route.params.tag' : 'filterByTags'
  },
  mounted(){
    this.posts = rawData
    this.filterByTags()
  },
  methods: {
    filterByTags(){
      this.myposts = [];
      for (let post of this.posts){
        if (post.tags.includes(this.$route.params.tag)){
          this.myposts.push(post)
        }
      }
    }
  }
}
</script>

<template>
  <button id="tag">{{this.$route.params.tag}}</button>
  <PostList :posts="myposts"></PostList>
</template>

<style scoped>
#tag {
  background-color: rebeccapurple;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  margin-right: 0.5rem;
  font-size: 3rem;
  }
</style>