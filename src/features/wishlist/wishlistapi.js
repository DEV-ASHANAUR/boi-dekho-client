import axios from "../../utils/axois";


export const addWishList = async(data) =>{
    // console.log("data",data);
    const response = await axios.post(`/wishlist/`,data);
    console.log(response.data);
    return response.data;
}
export const deleteWishList = async({productId,userId}) =>{
    console.log("productID",productId);
    console.log("userId",userId);
    const response = await axios.delete(`/wishlist/${productId}/${userId}`,);
    console.log("delete",response.data);
    return response.data;
}
export const getWishList = async(userId) =>{
    const response = await axios.get(`/wishlist/${userId}`);
    return response.data;
}