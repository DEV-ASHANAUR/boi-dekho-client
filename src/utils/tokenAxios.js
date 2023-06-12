import axios from "axios";
const localAuth = localStorage?.getItem("auth");
const auth = JSON.parse(localAuth);
const tokenaAxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/boikini',
    // headers: {'Authorization': 'Bearer '+auth.accessToken},
});

export default tokenaAxiosInstance;