import axios from '../../utils/tokenAxios';

export const addOrder = async (data) => {
    const response = await axios.post('/order', data);
    // console.log("order response : ",response.data);
    return response.data;
}

export const getOrders = async (userId) => {
    // const token = JSON.parse(localStorage.getItem("auth")).accessToken;
    // console.log("token",token)
    const response = await axios.get(`/order/${userId}`);
    
    return response.data;
}

export const payOrder = async (data) => {
    const response = await axios.post('/payment/init', {PayInfo:data});
    // console.log("order response : ",response.data);
    return response.data;
}