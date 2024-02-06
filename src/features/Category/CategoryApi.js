import axios from "../../utils/axois";

export const getCategories = async() =>{
    const response = await axios.get(`/category`);
    return response.data;
}

export const addCategory = async(data) =>{
    const response = await axios.post(`/category`,data);
    return response.data;
}