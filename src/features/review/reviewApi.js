import axios from "../../utils/axois";

export const createReview = async(data) =>{
    const response = await axios.post(`/review`,data);
    return response.data
}

export const getReview = async(id) =>{
    const response = await axios.get(`/review/${id}`);
    return response.data
}