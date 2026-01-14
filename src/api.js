// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // URL de base de votre API
  // headers: { 'Authorization': 'Bearer votre_token' } // Si authentification
});

export default api;
