import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdN4nzocIRkKEpWLkccveTwbnpOKcJwTg",
  authDomain: "sign-in-fba52.firebaseapp.com",
  projectId: "sign-in-fba52",
  storageBucket: "sign-in-fba52.appspot.com",
  messagingSenderId: "415251549555",
  appId: "1:415251549555:web:c68486f32be127a25c0906",
  measurementId: "G-LTS998XDVM",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
