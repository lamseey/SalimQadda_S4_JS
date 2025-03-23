<template>
  <div class="home">
    <TagCloud :tags="tags"></TagCloud>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import NavBar from "../components/NavBar.vue"
import rawData from "@/posts.json"
import TagCloud from "../components/TagCloud.vue"


export default{
  name: "Home",
  components:{
    PostList,
    NavBar,
    TagCloud
  },
  data() {
    return{
      posts: [],
      tags: []
    }
  },
  created() {
    this.posts = rawData;
    for (let post of this.posts){
      for (let tag of post.tags){
        if (!this.tags.includes(tag)){
          this.tags.push(tag)
        }
      }
    }
  }
}

</script>
