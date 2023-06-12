import axios from "../../utils/axois";

export const getPublisher = async() =>{
    const response = await axios.get(`/publisher`);
    return response.data;
}