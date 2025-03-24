<template>
  <div class="BookDetail">
    <div>
      <img :src="mybook.image">
    </div>
    <div>
      <h1>Titre: {{mybook.titre}}</h1>
      <h2>Auteur: {{mybook.auteur}}</h2>
      <h3>Année de publication: {{mybook.annee}}</h3>
      <h4>Catégorie: {{mybook.categorie}}</h4>
      <h4>Résumé: </h4>
      <p>{{mybook.resume}}</p>
      <h5 style="background-color: #2c3e50; border-radius: 2em; margin: 5% 30% 5% 30%;padding: 2%">{{(mybook.disponible) ? "Disponible" : "Emprunté"}}</h5>
    </div>
  </div>
</template>
<style scoped>
  .BookDetail{
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: midnightblue;
    color: antiquewhite;
    margin: 5% 20% 5% 20%;
    border-radius: 5em;
  }
</style>

<script>
import booksData from "@/booksData.json"

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      mybook: {},
    }
  },
  created() {
    for (let book of booksData.livres){
      if (book.id === parseInt(this.$route.params.id)){
        this.mybook = book;
      }
    }
  }
}
</script>
