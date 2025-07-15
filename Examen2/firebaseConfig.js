// components/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase con tus credenciales reales
const firebaseConfig = {
  apiKey: "AIzaSyDW83DqzRuSNTJFe4UbEauiPQM3xdth6NQ",
  authDomain: "lab10-autentication.firebaseapp.com",
  projectId: "lab10-autentication",
  storageBucket: "lab10-autentication.firebasestorage.app",
  messagingSenderId: "99445594526",
  appId: "1:99445594526:web:7b010ba175e533d333de8f"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
