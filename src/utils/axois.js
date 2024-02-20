import axios from "axios";
const axoisInstance = axios.create({
    baseURL: 'https://boidekho.onrender.com/api/v1/boikini',
});

export default axoisInstance;