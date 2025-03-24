<template>
  <div class="home">
    <div class="Search">
      <input @input="display(-1)" class="recherche" v-model="searchTitre" placeholder="Rechercher selon le titre">
      <input @input="display(-1)" class="recherche" v-model="searchAuteur" placeholder="Rechercher selon le nom de l'auteur">
    </div>
    <button @click="display(1)" :class="(dispo) ? 'filtreActive': 'filtrePassive' ">Disponible</button>
    <button @click="display(0)" :class="(emprun) ? 'filtreActive': 'filtrePassive' ">Emprunté</button>
    <Library :books="books"/>
  </div>
</template>
<style scoped>
  .filtreActive{
    background-color: #2c3e50;
    border-radius: 2em;
    margin: 0 1% 0 1%;
    padding: 1%;
    color: white
  }
  .filtrePassive{
    background-color: #2c3e50;
    filter: brightness(70%);
    border-radius: 2em;
    margin: 0 1% 0 1%;
    padding: 1%;
    color: white
  }
  .recherche{
    width: 80%;
    padding: 1%;
    margin: .2%;
    border-radius: 1em;
  }
</style>
<script>
import Library from "@/components/Library.vue"
import data from "@/booksData.json"
export default{
  name: "HomeView",
  components: {
    Library
  },
  data() {
    return {
      books: [],
      dispo: true,
      emprun: true,
      searchTitre: "",
      searchAuteur: ""
    }
  },
  mounted() {
    this.books = data.livres;
  },
  methods: {
    display(changement) {
      if (changement === 1) this.dispo = !this.dispo;
      else if (changement  === 0) this.emprun = !this.emprun;
      this.books = [];
      for (let book of data.livres){
        if (book.titre.toLowerCase().includes(this.searchTitre.toLowerCase()) && book.auteur.toLowerCase().includes(this.searchAuteur.toLowerCase()) ){
          if(this.dispo && book.disponible){
            this.books.push(book)
          }
          else if(this.emprun && !book.disponible){
            this.books.push(book)
          }
        }

      }
    },
  }
}
</script>