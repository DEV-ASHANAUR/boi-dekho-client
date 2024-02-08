import axios from "../../utils/axois";

export const getbooks = async ({ query }) => {
  // let querystring = "";

  // if(publisher?.length > 0){
  //     let pub = publisher.join(",");
  //     querystring += `publisher=${pub}&`
  // }

  // if(category?.length > 0){
  //     let cat = category.join(",");
  //     querystring += `categories=${cat}&`
  // }

  // if(subcategory?.length > 0){
  //     let subcat = subcategory.join(",");
  //     querystring += `subCategories=${subcat}&`
  // }

  // if(author?.length > 0){
  //     let auth = author.join(",");
  //     querystring += `authors=${auth}&`
  // }

  // if(search !== ""){
  //     querystring+= `search=${search}&`
  // }
  // if(sort !== ""){
  //     querystring+= `sort=${sort}&`
  // }

  const response = await axios.get(`/book/?${query}`);

  let res = {
    total: response.data.total,
    total_page: response.data.page,
    books: response.data.books,
    current_page: response.data.current,
  };

  return res;
};

export const getManagebooks = async () => {
  const response = await axios.get("/book/books");
  return response.data;
};

export const addBook = async (data) => {
  const response = await axios.post("/book",data);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`/book/${id}`);
  return response.data;
};

export const editBook = async ({id,data}) => {
  const response = await axios.put(`/book/${id}`,data);
  return response.data;
};
