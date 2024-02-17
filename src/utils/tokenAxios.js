import axios from "axios";

// Check if "auth" key exists in local storage and contains a valid accessToken
const authData = JSON.parse(localStorage.getItem("auth"));
const token = authData ? authData.accessToken : null;
console.log("token",token)
// Check if a valid token is available before creating the Axios instance
const tokenAxiosInstance = token
  ? axios.create({
      baseURL: 'http://localhost:5000/api/v1/boikini',
      headers: {'Authorization': token},
  })
  : null;

export default tokenAxiosInstance;
