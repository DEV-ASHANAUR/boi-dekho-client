import axios from "../../utils/axois";

export const getSubCategories = async() =>{
    const response = await axios.get(`/sub-category`);
    return response.data;
}