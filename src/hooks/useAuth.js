import { useSelector } from 'react-redux'
import auth from "../firebase/firebase.config";
import { useAuthState } from 'react-firebase-hooks/auth';
const useAuth = () => {
    const authh = useSelector((state) => state.auth);
    const [user] = useAuthState(auth);
    if(authh?.accessToken && authh?.currentUser && user){
        return true;
    }else{
        return false;
    }
}

export default useAuth