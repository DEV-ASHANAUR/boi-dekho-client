import axios from "axios";
const axoisInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/boikini',
});

export default axoisInstance;