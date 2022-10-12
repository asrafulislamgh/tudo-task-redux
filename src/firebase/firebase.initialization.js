import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializatingAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializatingAuthentication;