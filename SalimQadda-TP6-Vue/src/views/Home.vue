<template>
  <div class="home">
    <PostList :posts="posts"></PostList>
    <TagCloud></TagCloud>
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
      posts: []
    }
  },
  created() {
    this.posts = rawData;
  }
}

</script>
