<template>
<div>
<!-- As a heading -->


<section class="hero d-flex align-items-center"  v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }">
    <div class="container text-center">
      <h1 class="display-5 fw-bold">
        Découvrez les meilleurs lieux autour de vous
      </h1>
      <p class="lead mt-3">
        Restaurants, hôtels, loisirs, services… tout au même endroit.
      </p>

      <div class="mt-4">
        
          <p class="btn btn-primary btn-lg me-2 mx-auto w-60"> Explorer les lieux</p>        
        
        <p class="btn btn-success btn-lg mx-auto w-60">
          Ajouter un lieu
        </p>
      </div>
    </div>
  </section>

   <section class="py-5 bg-primary text-white text-center"  v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4">
          <h3>📍 Géolocalisation</h3>
          <p>Trouvez les lieux proches de vous rapidement.</p>
        </div>

        <div class="col-md-4">
          <h3>⭐ Avis & notes</h3>
          <p>Consultez les avis avant de vous déplacer.</p>
        </div>

        <div class="col-md-4">
          <h3>📂 Catégories</h3>
          <p>Explorez par type de lieu facilement.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 bg-light "  v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }">
    <div class="container">
      <h2>Prêt à découvrir votre prochain lieu ?</h2>
      <p class="mt-3">
        Rejoignez <strong>PlaceConsult</strong> et explorez votre ville autrement.
      </p>
      <button class="btn btn-light btn-lg mt-3">
         Commencer maintenant
      </button>
    </div>
  </section>

   <section class="liste_categorie py-5"  v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }">
    <div class="container">
      <h2 class="text-center text-white fw-bold mb-4">Consultez parmis nos catégories populaires !</h2>

      <div class="row g-4">
        <router-link   v-for="categorie in categories" :key="categorie.id" :to="'categories/'+categorie.id" class="col-md-3 text-decoration-none"  > 
            <div class="card text-center shadow-sm h-100 category-card">
              <div class="card-body">
                <h5>{{ categorie.nom_categorie }}</h5>
              </div>
            </div>
        </router-link >
      </div>
    </div>
  </section>

</div>

</template>

<script>
import axios from 'axios';


export default{
  data() {
    return {
      // Initialize with an empty array or null
      categories: [],
    };
  },

  methods: {
  },

  mounted() {
  axios.get('https://placeapi-u48i.onrender.com/api/categories/',)
  .then(response => this.categories = response.data)

}

}


</script>


<style scoped>
    h1{
        font-weight: bold;
        font-size: 20px;
    }

    .hero{
  min-height: 50vh;
  background-image: url('/images/ville.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  font-weight: bold;
    }

    .category-card {
  cursor: pointer;
  transition: transform 0.3s;
}
.category-card:hover {
  transform: translateY(-8px);
  background-color: darkcyan;
  color:white
}

.liste_categorie{
  background-image: url('/images/route.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}



</style>

