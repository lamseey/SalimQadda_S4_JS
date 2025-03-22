<script>
  import postsData from "@/posts.json"

  export default{
    name: "CreatePost",
    data() {
      return {
        posts: [],
        myPost: {tags: []},
        addButton: true,
        tag: ""
      }
    },
    mounted() {
      this.posts = postsData
    },
    methods: {
      addTag() {
        this.addButton = false;
      },
      addThisTag() {
        if (!/^[a-z0-9]+$/i.test(this.tag) || this.tag === ""){
          this.tag = ""
          alert("Tag not valid, please enter a tag in a single word format")
        }
        else if (!this.myPost.tags.includes(this.tag)){
          this.addButton = true;
          this.myPost.tags.push(this.tag);
          this.tag = ""
        }
        else {
          this.tag="";
          alert("Tag already exists")
        }
      },
      addPost() {
        this.myPost.id = (this.posts.length) ? this.posts[this.posts.length - 1].id + 1 : 0;
        this.posts.push(this.myPost);
        this.$router.push("/");
      }
    }
  }
</script>

<template>
  <div class="create-post">
    <input v-model="myPost.titre" placeholder="Titre"><br>
    <div v-for="mytag in myPost.tags" :key="mytag">
      <span class="tag">{{ mytag }}</span>
      <button class="deleteButton" @click="myPost.tags.splice(myPost.tags.indexOf(mytag), 1)">X</button>
    </div>
    <button v-if="addButton" @click="addTag">Add a tag</button>
    <div v-else>
      <input v-model="tag" placeholder="Tag">
      <button @click="addThisTag">Add this tag</button>
    </div>
    <br>
    <textarea v-model="myPost.article" placeholder="Article"></textarea><br>
    <button @click="addPost">Submit</button>
  </div>
</template>

<style scoped>
.create-post {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.create-post input,
.create-post textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.create-post textarea {
  height: 50vh;
  resize: vertical;
}

.create-post button {
  padding: 0.75rem 1.5rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.create-post button:hover {
  background-color: #0056b3;
}

.create-post .tag {
  display: inline-block;
  background-color: #007BFF;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

.create-post .deleteButton {
  background-color: #FF4136;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.create-post .deleteButton:hover {
  background-color: #E02424;
}
</style>