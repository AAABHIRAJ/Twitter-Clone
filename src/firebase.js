import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyASKBqcfe_YvtUH3B5ZF73aT20drqAzYRI",
    authDomain: "twitter-build-54e3f.firebaseapp.com",
    projectId: "twitter-build-54e3f",
    storageBucket: "twitter-build-54e3f.appspot.com",
    messagingSenderId: "1098488018969",
    appId: "1:1098488018969:web:45437d77f4d3450da5d288"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;


  
