<script>
  export default{
    name: "OneBook",
    props: {
      book: Object
    },
    methods: {
      VoirPlus() {
        this.$router.push("/book/" + this.book.id);
      }
    }
  }
</script>

<template>
  <div class="book">
    <div>
      <img :src="book.image">
    </div>
    <div>
      <h1>Titre: {{book.titre}}</h1>
      <h2>Auteur: {{book.auteur}}</h2>
      <h3>Année de publication: {{book.annee}}</h3>
      <h4>Catégorie: {{book.categorie}}</h4>
      <h5 style="background-color: #2c3e50; border-radius: 2em; margin: 5% 30% 5% 30%;padding: 2%; color: white">{{(book.disponible) ? "Disponible" : "Emprunté"}}</h5>
      <button class="voirplus" @click="VoirPlus">Voir Plus</button>
    </div>

  </div>

</template>

<style scoped>

  .book{
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: powderblue;
    margin: 5% 20% 5% 20%;
    border-radius: 5em;
  }
  .voirplus{
    background-color: #42b983;
    border: 1px solid powderblue;
    border-radius: 1em;
    font-size: 1.5em;
    padding: .5em;
    margin: .5em
  }
</style>