<script>
export default {
name: "EditJob",
  props: {
    travail: Object
  },
  data() {
  return{
    localtravail: this.travail
  }
  },
  methods: {
    formattedSalaire() {
      this.localtravail.salaire += " MAD/an";
  }
  }
}
</script>

<template>
  <input id="headerInput" type="text" v-model="localtravail.titre" placeholder="titre">
  <input class="inputs" type="text" v-model="localtravail.description" placeholder="description">
  <input class="inputs" type="number" @change="formattedSalaire" v-model="localtravail.salaire"  placeholder="0">
  <input class="inputs" type="date" v-model="localtravail.date_de_creation" placeholder="date de création">
</template>

<style scoped>
#headerInput{
  width: 100%;
  font-size: 2em;
  margin-bottom: 10px;
  text-align: center;
}
.inputs{
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}
</style>