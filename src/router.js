// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Exemple de composant
import Categorie from './components/Categorie.vue';
import AddPlace from './components/AddPlace.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/categories/:id', component: Categorie, name:"category-places", props:true },
  { path: '/Ajouter/', component: AddPlace,},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Pour les applications Vite
  routes,
});

export default router;
