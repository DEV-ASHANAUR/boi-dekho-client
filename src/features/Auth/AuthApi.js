import axios from "../../utils/axois"
import axiosToken from "../../utils/tokenAxios"

export const registerUser = async (data) => {
    const response = await axios.post("/auth/register",data);
    return response.data
}
export const googleUser = async (data) => {
    // console.log("google data",data)
    const response = await axios.post("/auth/google",data);
    return response.data
}
export const login = async (data) => {
    console.log("data",data)
    const response = await axios.post("/auth/login",data);
    return response.data
}
export const changePass = async ({id,data}) => {
    const response = await axiosToken.post(`/auth/change-password/${id}`,data);
    return response.data
}