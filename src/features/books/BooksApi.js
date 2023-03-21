import axios from "../../utils/axois";

export const getbooks = async({publisher,category,subcategory,author,page}) =>{
    let querystring = "";

    if(publisher?.length > 0){
        let pub = publisher.join(",");
        querystring += `publisher=${pub}&`
    }

    if(category?.length > 0){
        let cat = category.join(",");
        querystring += `categories=${cat}&`
    }

    if(subcategory?.length > 0){
        let subcat = subcategory.join(",");
        querystring += `subCategories=${subcat}&`
    }

    if(author?.length > 0){
        let auth = author.join(",");
        querystring += `authors=${auth}&`
    }

    const response = await axios.get(`/book/?${querystring}page=${page}&limit=5`);

    let res = {
        total: response.data.total,
        total_page :response.data.page,
        books: response.data.books,
        current_page: response.data.current
    }

    return res;
}