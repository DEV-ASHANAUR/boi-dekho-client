import axios from "../../utils/axois";

export const getbooks = async(type) =>{
    const response = await axios.get(`/book/${type}`);
    return response.data;
}