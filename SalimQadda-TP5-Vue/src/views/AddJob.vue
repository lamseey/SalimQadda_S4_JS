<script>
import rawData from "@/jobs.json"
export default {
name: "AddJob",
  props: {
      jobs: {
      type: Array,
      required: true
    }
    },
  data() {
  return{
    localtravail: {
      id: 0,
      titre: "",
      description: "",
      salaire: 0,
      date_de_creation: new Date().toISOString().split('T')[0]
    },
  }
  },
  methods: {
    addJob(){
      this.localtravail.salaire += " MAD/an";
      rawData.push(this.localtravail);
      this.$router.push("/")
    }
  },
}
</script>

<template>
  <div>
    <input id="headerInput" v-model="localtravail.titre" placeholder="Titre"><br>
    <input class="inputs" v-model="localtravail.description" placeholder="Description"><br>
    <label>Salaire par an: </label><br>
    <input class="inputs" type="number" v-model="localtravail.salaire" placeholder="Salaire MAD/an"><br>
    <label>Date de création:</label><br>
    <input class="inputs" type="date" v-model="localtravail.date_de_creation" placeholder="Date de création"><br>
    <button type="submit" id="ajouter" @click="addJob">Ajouter</button>
  </div>
</template>

<style scoped>
#headerInput{
  width: 50%;
  margin: .5em;
  padding: 1em;
  font-size: 3em;
  text-align: center;

}
.inputs{
  width: 80%;
  padding: 1em;
  margin: .5em;
  font-size: 1.5em;
  text-align: center;
}
#ajouter{
  width: 30%;
  padding: 1em;
  margin: .5em;
  font-size: 1.5em;
  text-align: center;
  background-color: #0027a6;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>