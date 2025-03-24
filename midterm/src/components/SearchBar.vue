<script>
export default{
  name: "SearchBar",
  props: {
    books: Array
  },
  data() {
    return {
      searchTitre: "",
      searchAuteur: "",
      mybooks: []
    }
  },
  methods: {
    filterBooks() {
      for(let book of this.books){
        if (book.titre.toLowerCase().includes(this.searchTitre.toLowerCase())){
          this.mybooks.push(book)
        }
        else if (book.auteur.toLowerCase().includes(this.searchAuteur.toLowerCase())){
          this.mybooks.push(book)
        }
      }
      this.$emit("filtered", this.mybooks)
    }
  }
}
</script>

<template>
  <div class="Search">
    <input @input="filterBooks" class="recherche" v-model="searchTitre" placeholder="Rechercher selon le titre">
    <input @input="filterBooks" class="recherche" v-model="searchAuteur" placeholder="Rechercher selon le nom de l'auteur">
  </div>
</template>

<style scoped>
  .recherche{
    width: 80%;
    padding: 1%;
    margin: .2%;
    border-radius: 1em;
  }
</style>