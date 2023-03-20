import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getbooks} from './BooksApi';

const initialState = {
    books: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchBooks = createAsyncThunk("books/fetchBooks",async(type)=>{
    const books = await getbooks(type);
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
            state.books = action.payload;
        })
        .addCase(fetchBooks.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.books = [];
            state.error = action.error?.message;
        })
    }
});

export default booksSlice.reducer;