<template>
  <div id="app">
    <header>
      <img src="@/assets/logo-les-bonnes-pieces.png" alt="LOGO">
      <h1>Les Bonnes Pièces</h1>
    </header>
    <main>
      <!-- Menu de recherche -->
      <section class="filtres">
        <h3>Filtres</h3>
        <div class="filtres-produits">
          <div class="filtre-produit">
            <h4>Catégories</h4>
            <input @change="toutCheck" v-model="allFiltres" type="checkbox" id="allFiltres" value="allFiltres"><label for="allFiltres">Tout sélectionner</label>
            <ul>
              <li v-for="categorie in categories" :key="categorie">
                <input type="checkbox" :id="categorie" v-model="categoryFilters[categorie]" :value="categorie">
                <label :for="categorie">{{ categorie }}</label>
              </li>
            </ul>
          </div>
          <div class="filtre-produit">
            <h4>Disponibilité</h4>
            <ul>
              <li><input checked type="checkbox" id="disponible" v-model="disponible" value="disponible"><label for="disponible">Disponible</label></li>
              <li><input checked type="checkbox" id="indisponible" v-model="indisponible" value="indisponible"><label for="indisponible">Indisponible</label></li>
            </ul>
          </div>
          <div id="panier">
            <h4>Panier</h4>
            <p>Nombre de produits: {{panier.length}}</p>
            <button id="vpanier" @click="produits.forEach(produit => produit.panier = 0)">Vider le panier</button>
            <p>Prix total: {{totalPrixPanier}} €</p>
            <ul v-for="produit in panier" :key="produit.id">
              <li>
                {{produit.nom}} - {{produit.prix}} €
                <button class="epanier" @click="panier.splice(panier.indexOf(produit), 1)">Retirer du panier</button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Fiches produits -->
      <section class="fiches">
        <input id="search" type="text" v-model="recherche" placeholder="Rechercher un produit">
        <button @click="trier" id="trier">Tri: {{tri}}</button>
        <h3>Produits</h3>
        <div class="fiches-produits">
          <div class="fiche-produit" v-for="produit in produits" :key="produit.id">
            <div v-if="checkConditions(produit)">
              <hr>
              <img :src="produit.image" alt="Image du produit">
              <h4>{{ produit.nom }}</h4>
              <p>{{ produit.prix }} €</p>
              <h5>{{ produit.categorie }}</h5>
              <p v-if="produit.disponible">Disponible</p>
              <p v-else>Indisponible</p>
              <button id="bpanier" @click="panier.push(produit)">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      produits: [],
      recherche: "",
      categoryFilters: {},
      disponible: true,
      indisponible: true,
      allFiltres: true,
      tri: "Croissant",
      panier: []
    }
  },
  computed: {
    totalPrixPanier() {
      return this.panier.reduce((acc, produit) => acc + produit.prix, 0);
    }
  },
  mounted() {
    fetch('/pieces-autos.json')
        .then(response => response.json())
        .then(data => {
          this.produits = data.map(produit => ({
            ...produit,
            image: 'https://picsum.photos/seed/{seed}/200/200'.replace('{seed}', produit.id + 30),
            disponible: Math.random() < 0.6,
          }));
          this.initializeCategories();
          this.trier();
        })
        .catch(error => console.error('Erreur : ' + error));
  },
  methods: {
    initializeCategories() {
      const categoriesSet = new Set();
      this.produits.forEach(produit => {
        categoriesSet.add(produit.categorie);
      });
      this.categories = Array.from(categoriesSet);
      this.categories.forEach(category => {
        this.categoryFilters[category] = this.allFiltres;
      });
    },
    toutCheck() {
      this.categories.forEach(category => {
        this.categoryFilters[category] = this.allFiltres;
      });
      this.disponible = this.indisponible = this.allFiltres;
    },
    checkConditions(produit) {
      return (this.recherche === "" || produit.nom.toLowerCase().includes(this.recherche.toLowerCase()))
          && (this[produit.disponible ? "disponible" : "indisponible"])
          && (this.categoryFilters[produit.categorie]);
    },
    trier() {
      this.produits.sort((a, b) => {
        if (this.tri === "Croissant") {
          return a.prix - b.prix;
        } else {
          return b.prix - a.prix;
        }
      });
      this.tri = this.tri === "Croissant" ? "Décroissant" : "Croissant";
    }
  }
}
</script>