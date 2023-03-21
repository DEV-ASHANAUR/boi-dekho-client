import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getbooks} from './BooksApi';

const initialState = {
    books: [],
    total: null,
    current_page:null,
    total_page:null,
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchBooks = createAsyncThunk("books/fetchBooks",async({publisher,category,subcategory,author,page,search,sort})=>{
    const books = await getbooks({publisher,category,subcategory,author,page,search,sort});
    return books;
})

export const booksSlice = createSlice({
    name:"books",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchBooks.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchBooks.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.books = action.payload.books;
            state.current_page = action.payload.current_page;
            state.total = action.payload.total;
            state.total_page = action.payload.total_page;
        })
        .addCase(fetchBooks.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.books = [];
            state.current_page = null;
            state.total = null;
            state.total_page = null;
            state.error = action.error?.message;
        })
    }
});

export default booksSlice.reducer;