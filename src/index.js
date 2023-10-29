import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export {
  initializeApp,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
};

const firebaseConfig = {
  apiKey: "AIzaSyAykHmGuzPZRHqDTs50ayO9Dn5zQh767LQ",
  authDomain: "team-apollo-6212f.firebaseapp.com",
  projectId: "team-apollo-6212f",
  storageBucket: "team-apollo-6212f.appspot.com",
  messagingSenderId: "1099264995552",
  appId: "1:1099264995552:web:31dc0ad7a70bc1609c2085",
  measurementId: "G-JP3JG86T64",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// init services

// function set_city(
//   collection_name,
//   document_id,
//   city_name,
//   city_state,
//   city_country
// ) {
//   setDoc(doc(db, collection_name, document_id), {
//     name: city_name,
//     state: city_state,
//     country: city_country,
//   });
// }

// document.querySelectorAll(".dropdown-item").forEach((item) => {
//   item.addEventListener(onclick, () => {
//     document.querySelector("#dropdownMenuButton1").textContent =
//       item.textContent;
//   });
// });
