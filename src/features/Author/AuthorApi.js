import axios from "../../utils/axois";

export const getAuthor = async() =>{
    const response = await axios.get(`/author`);
    return response.data;
}