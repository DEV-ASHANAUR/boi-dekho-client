import { useSelector } from 'react-redux'

const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    if(auth?.accessToken && auth?.currentUser){
        return true;
    }else{
        return false;
    }
}

export default useAuth