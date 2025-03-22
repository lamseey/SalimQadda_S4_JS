<script>
export default {
  name: "FilterNav",
  props: {
    jobs: Array
  },
  data(){
    return{
      search: "",
    }
  },
  methods: {
    filterJobs(){
      this.jobs.forEach(job => { job.hidden = !job.titre.toLowerCase().includes(this.search.toLowerCase());
      });
      this.$emit("filtered", this.jobs);
    }
  }
}
</script>

<template>
  <input id="cherche" type="text" v-model="search" placeholder="Rechercher un job" @input="filterJobs">
</template>

<style scoped>
#cherche{
  width: 50%;
  padding: 1em;
  margin: 1em;
  font-size: 1.5em;
  text-align: center;
}
</style>