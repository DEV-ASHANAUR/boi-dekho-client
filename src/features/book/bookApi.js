import axios from "../../utils/axois"

export const getBook = async (id) => {
    const response = await axios.get(`/book/${id}`);
    return response.data;
}