import axios from "../../utils/axois";

export const getAuthor = async () => {
  const response = await axios.get(`/author`);
  return response.data;
};
export const addAuthor = async (data) => {
  const response = await axios.post(`/author`, data);
  return response.data;
};
export const deleteAuthor = async (id) => {
    const response = await axios.delete(`/author/${id}`);
    return response.data;
  };
  export const editAuthor = async ({id,data}) => {
    const response = await axios.put(`/author/${id}`, data);
    return response.data;
  };
