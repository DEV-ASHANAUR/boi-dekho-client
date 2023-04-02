import axios from "../../utils/axois"

export const registerUser = async (data) => {
    const response = await axios.post("/auth/register",data);
    return response.data
}
export const googleUser = async (data) => {
    console.log("google data",data)
    const response = await axios.post("/auth/google",data);
    return response.data
}
export const login = async (data) => {
    const response = await axios.post("/auth/login",data);
    // console.log("reponse",response.data);
    return response.data
}