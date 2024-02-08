import axios from "../../utils/axois";

export const getPublisher = async() =>{
    const response = await axios.get(`/publisher`);
    return response.data;
}
export const addPublishers = async(data) =>{
    const response = await axios.post(`/publisher`,data);
    return response.data;
}
export const deletePublisher = async(id) =>{
    const response = await axios.delete(`/publisher/${id}`);
    return response.data;
}
export const editPublisher = async({id,data}) =>{
    const response = await axios.put(`/publisher/${id}`,data);
    return response.data;
}