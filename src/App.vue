<template>
  <div>
    <Nav></Nav>
    <router-view ></router-view > 
    <Footer></Footer>
    
  </div>
</template>

<script>

import Categorie from './components/Categorie.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Nav from './components/Nav.vue';




export default {
  name: 'App',
  components: {
    Home,
    Categorie,
    Nav,
    Footer,
  }
}
</script>

