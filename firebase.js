import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiFmNQx-hGc2eh1eKxAaYROsVQayrK30k",
    authDomain: "fir-login-7a3f8.firebaseapp.com",
    projectId: "fir-login-7a3f8",
    storageBucket: "fir-login-7a3f8.appspot.com",
    messagingSenderId: "683466896224",
    appId: "1:683466896224:web:d28a3269fd7963eacb6405",
    measurementId: "G-V0EEDQZN5G"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export {auth}

