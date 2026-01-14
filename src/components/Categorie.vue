<template>
    <div class="main">
      <div class="container">
           

        <button class="btn btn-success mt-4 mb-4 w-50"  @click="showForm = !showForm"
                      v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 350 }"
         >Insérer votre lieu ici...
        </button> 

        <div class="card_categorie mx-auto mb-4"  v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, x: 40 }"
                      :visible="{ opacity: 1, x: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }">Liste des {{ categorie.nom_categorie }}</div> 
        <div class="place-card mb-2" v-if="showForm">
            <form @submit.prevent="addPlace">
               
                <input class="form-control" placeholder="Lieu que vous voulez ajouter"  type="text" id="nom_place" v-model="PlaceForm.nom_place" required>

              
                <input class="form-control" placeholder="Ville"   type="text" id="ville" v-model="PlaceForm.ville" required>

                
                <input class="form-control" placeholder="brève indication"   type="text" id="indication" v-model="PlaceForm.indication" required>

                
                <input class="form-control" placeholder="votre pseudo"  type="text" id="pseudo" v-model="PlaceForm.pseudo" required>

                 <button class="btn btn-outline-primary mt-2" type="submit">Confirmer</button>
            </form>
        </div>

        <div class="row">           
                <div v-if="places.length" class="places-grid">
                    
                    <div
                        v-for="place in places"
                        :key="place.id"
                        id="place-card"
                        class="col-md-10"
                      v-motion
                      v-motion-visible
                      :initial="{ opacity: 0, y: 40 }"
                      :visible="{ opacity: 1, y: 0 }"
                      :transition="{ type: 'spring', stiffness: 250 }"
                    >
                        <div class="place-card__content">
                        <button class="place-card__btn">
                            <h4>{{ place.nom_place }}</h4>
                        </button>
                        <h5 class="place-card__title mt-2">
                            📍 {{ place.ville }}
                        </h5>
                        <p class="place-card__title">
                            {{ place.indication }}
                        </p>
                        <p class="place-card__address">Ajouté par : <strong>{{ place.pseudo }}</strong></p>
                        </div>
                    </div>
                </div>
                <div class="text-white" v-else>Aucun lieu ajouté pour l'instant</div>           
        </div>
      </div>  
    </div>

</template>

<script>
import axios from 'axios';



export default {
    data(){
        return {
            places: [],
            PlaceForm : {nom_place: "", ville:"", indication:"", pseudo:"",},
            showForm : false,
            categorie: "" ,
        }
            
    },

    mounted() {
    this.fetchPlaces();
    this.fetchCategory();
  },

     watch: {
    "$route.params.id"() {
      this.fetchPlaces();
    },
  },

    methods : {
        async fetchPlaces(){
            try{
                const response = await axios.get(`https://placeapi-u48i.onrender.com/api/categories/${this.$route.params.id}/places/`)
                this.places = response.data;
                //console.log(response.data);
                
            }
            catch(err){
                alert("erreur");
            }
        },

        async fetchCategory(){
          const response = await axios.get(`https://placeapi-u48i.onrender.com/api/categories/${this.$route.params.id}/`)
          this.categorie = response.data;
          console.log(this.categorie);
          
        },

         async addPlace(){
            const response = await axios.post(`https://placeapi-u48i.onrender.com/api/categories/${this.$route.params.id}/places/`, this.PlaceForm)
            
            //console.log(response.data);

              // reset formulaire
        this.PlaceForm = {
          nom_place: "",
          ville: "",
          indication: "",
          pseudo: "",
        };

        this.showForm = false;  //le formulaire disparait lorsque le lieu est ajouté
        alert("Merci pour ta contribution !")
        this.places.unshift(response.data)
        console.log(this.categoryName);
        
        

            
        }
    }

}
</script>

<style scoped>
    .main{
      background-image: url('/images/YouTube.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
  
  
    .container{
        min-height: 100vh;
        
    }

    form{
        width: 80%;
        margin: 0 auto;
    }

    input{
        margin-top: 10px;
    }

    #place-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

    .place-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08); 
  display: flex;
  flex-direction: column;
  height: 16rem;
}

.card_categorie{
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08); 
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 3rem;
  width: 20rem;
  font-size: 25px;
  font-weight: bold;
}

#place-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

/* Image */
.place-card__image {
  height: 180px;
  overflow: hidden;
}

#place-card:hover {
  transform: scale(1.05);
}

/* Content */
.place-card__content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.place-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}

.place-card__address {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 10px;
}

.place-card__address i {
  color: #e63946;
  margin-right: 6px;
}

.place-card__description {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 16px;
}

/* Button */
.place-card__btn {
  background: linear-gradient(135deg, #3a86ff, #4361ee);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: background 0.3s ease, transform 0.2s ease;
}

.place-card__btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #4361ee, #3a86ff);
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

</style>


