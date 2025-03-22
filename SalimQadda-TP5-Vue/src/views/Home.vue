<template>
  <div class="home">
    <FilterNav :jobs="jobs" @filtered="jobs = $event"/>
    <h1 style="color: red;">Jobs disponibles: </h1>
    <div class="travail" v-for="job in jobs" :key="job.id" :style="{display: job.hidden ? 'none' : 'block'}">
        <div v-if="!job.editing">
        <h2>{{ job.titre }}</h2>
        <button class="showd" @click="job.detailed = !job.detailed">
          {{ job.detailed ? "Cacher détails" : "Voir détails" }}
        </button>
        <div v-if="job.detailed">
          <JobDetail :travail="job"/>
        </div><br>
      </div>
      <div v-else>
        <EditJob :travail="job"/>
      </div>
      <button style="width: 5%" @click="deleteJob(job)"><img style="width: 100%" src="/deleteicon.png"> </button>
      <button style="width: 5%" @click="job.editing=!job.editing"><img style="width: 100%" :src="job.editing ? 'confirmicon.png' : 'editicon.png'"></button>
    </div>
    
  </div>
</template>

<script>
import FilterNav from "@/components/FilterNav.vue"
import JobDetail from "@/components/JobDetail.vue"
import EditJob from "@/components/EditJob.vue"
import rawData from "@/jobs.json"

export default {
  name: "HomeApp",
  components: {
    FilterNav,
    JobDetail,
    EditJob,
  },
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    this.jobs = rawData;
  },
  methods: {
    deleteJob(job) {
      if(confirm("Voulez-vous vraiment supprimer ce job?")) {
        this.jobs = this.jobs.filter(j => j.id !== job.id)
      }
    },
  }
}
</script>

<style scoped>
.travail{
  border: .1em solid black;
  margin: 1em 20em 1em 20em;
  padding: 1em;
}
.showd{
  margin: 1em;
  padding: .5em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>