import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALmpP1meFoErONk_dHD2-HonKazSSM8nk",
  authDomain: "finallll-61290.firebaseapp.com",
  projectId: "finallll-61290",
  storageBucket: "finallll-61290.appspot.com",
  messagingSenderId: "386425180364",
  appId: "1:386425180364:web:e4c3e98d02ec5b2404f269"
};


    
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore };