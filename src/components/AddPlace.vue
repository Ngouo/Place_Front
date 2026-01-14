<template>
  <div class="container">
        <div class="card shadow">
            <form @submit.prevent="addPlace">
                <label for="nom_place">Endroit : </label>
                <input type="text" id="nom_place" v-model="PlaceForm.nom_place" required>

                <label for="ville">Ville : </label>
                <input type="text" id="ville" v-model="PlaceForm.ville" required>

                <label for="indication">Indication : </label>
                <input type="text" id="indication" v-model="PlaceForm.indication" required>

                <label for="pseudo">Pseudo : </label>
                <input type="text" id="pseudo" v-model="PlaceForm.pseudo" required>

                 <button type="submit">Ajouter</button>
            </form>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

    axios
export default {
    data() {
        return {
            places : [],
            PlaceForm : {nom_place: "", ville:"", indication:"", pseudo:"" }
        }
    },

         watch: {
    "$route.params.id"() {
      this.addPlace();
    },
  },

    methods : {
        async addPlace(){
            const response = await axios.post(`http://localhost:8000/api/categories/${this.$route.params.id}/places/`)
            this.places = response.data
            this.PlaceForm = '';
            console.log(response.data);
            
        }
    }

}
</script>

<style>

</style>