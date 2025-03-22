<script>
export default{
  name: "TagCloud",
  props: {
    tags: []
  },
  methods: {
    OpenTag(tag) {
      this.$router.push("/tags/" + tag);
    }
  }
}
</script>

<template>
  <div class="tags">
    <button v-for="tag in tags" :key="tag" @click="OpenTag(tag)" class="tag">{{tag}}</button>
  </div>
</template>

<style>
  .tag {
  background-color: #007BFF;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  }
  .tags {
  margin-bottom: 0.5rem;
  }
</style>