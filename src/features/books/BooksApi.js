import axios from "../../utils/axois";

export const getbooks = async() =>{
    const response = await axios.get('/book');
    return response.data;
}