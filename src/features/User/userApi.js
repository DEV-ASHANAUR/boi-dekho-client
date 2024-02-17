import axios from "../../utils/tokenAxios";

export const getUsers = async () => {
  const response = await axios.get(`/user`);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/user/${id}`);
  return response.data;
};
export const editUser = async ({ id, data }) => {
  const response = await axios.put(`/user/${id}`, data);
  return response.data;
};
