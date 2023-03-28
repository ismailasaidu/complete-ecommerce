import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import firebase from "firebase/compat/app"
// import 'firebase/database';

export const firebaseConfig = {
apiKey: "AIzaSyB03cbo2oILEGN6FFlI5D37ABLX02WeJVU",
authDomain: "ecommerce-fashion-b84b9.firebaseapp.com",
databaseURL: "https://ecommerce-fashion-b84b9-default-rtdb.firebaseio.com",
projectId: "ecommerce-fashion-b84b9",
storageBucket: "ecommerce-fashion-b84b9.appspot.com",
messagingSenderId: "1092502827407",
appId: "1:1092502827407:web:ee5f563d79e9e14beadbfa",
measurementId: "G-8L81C6FDHM",


};







const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
// export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
