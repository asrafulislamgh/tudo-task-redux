import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmailandPass } from "../features/listSlider/emailSliderSlice";
import initializatingAuthentication from "../firebase/firebase.initialization";

initializatingAuthentication();
const UseFirebase = () => {
    const auth = getAuth();
    // const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userInfo) => {
                navigate("/dashboard");
                dispatch(addEmailandPass({ email, password }))
            }).catch(error => {
                console.log(error)
            })
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => {
        });

    }


    return { handleLogin, handleLogout };

}

export default UseFirebase;
