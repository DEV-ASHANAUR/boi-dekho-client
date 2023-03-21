import axios from "../../utils/axois";

export const getCategories = async() =>{
    const response = await axios.get(`/category`);
    return response.data;
}