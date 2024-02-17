import axios from '../../utils/tokenAxios';

export const addOrder = async (data) => {
    const response = await axios.post('/order', data);
    // console.log("order response : ",response.data);
    return response.data;
}

export const getOrders = async (userId) => {
    const response = await axios.get(`/order/${userId}`);
    return response.data;
}

export const getSalesData = async () => {
    const response = await axios.get(`/order/month-wise-sale-report`);
    return response.data;
}

export const getDiffSalesData = async () => {
    const response = await axios.get(`/order/income`);
    return response.data;
}

export const payOrder = async (data) => {
    const response = await axios.post('/payment/init', {PayInfo:data});
    // console.log("order response : ",response.data);
    return response.data;
}
export const getAllOrders = async () => {
    const response = await axios.get('/order');
    // console.log("order response : ",response.data);
    return response.data;
}
export const deleteOrder = async (id) => {
    const response = await axios.delete(`/order/${id}`);
    return response.data;
}
export const editOrder = async ({id,data}) => {
    const response = await axios.put(`/order/${id}`,data);
    return response.data;
}