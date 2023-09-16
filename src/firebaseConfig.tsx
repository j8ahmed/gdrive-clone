// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkrv_h5qx8LUarfL_IMI1A6JG3WMv617c",
    authDomain: "j8ahmed-gdrive-clone.firebaseapp.com",
    projectId: "j8ahmed-gdrive-clone",
    storageBucket: "j8ahmed-gdrive-clone.appspot.com",
    messagingSenderId: "878444960779",
    appId: "1:878444960779:web:302f14411eedfbab6e3b0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);

