import axios from "../../utils/axois";

export const getReletedBooks = async({categories,bookId})=>{
    // console.log("bbb",bookId)
    let querystring = '';
    if(categories?.length > 0){
        let cat = categories.join(",");
        querystring += `categories=${cat}`
    }
    const response = await axios.get(`/book/releted-book?${querystring}&id_ne=${bookId}`);
    return response.data;
}