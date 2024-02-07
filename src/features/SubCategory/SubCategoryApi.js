import axios from "../../utils/axois";

export const getSubCategories = async() =>{
    const response = await axios.get(`/sub-category`);
    return response.data;
}
export const addSubCategory = async(data) =>{
    const response = await axios.post(`/sub-category`,data);
    return response.data;
}
export const deleteSubCategory = async(id) =>{
    const response = await axios.delete(`/sub-category/${id}`);
    return response.data;
}
export const editSubCategory = async({id,data}) =>{
    const response = await axios.put(`/sub-category/${id}`,data);
    return response.data;
}