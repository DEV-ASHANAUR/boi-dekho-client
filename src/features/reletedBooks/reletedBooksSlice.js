import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getReletedBooks} from './reletedBooksApi'

const initialState = {
    reletedBooks: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchReletedBooks = createAsyncThunk("reletedBooks/fetchReletedBooks",async({categories,bookId})=>{
    const Books = await getReletedBooks({categories,bookId});
    return Books;
})

export const ReletedBooksSlice = createSlice({
    name:"ReletedBooksSlice",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchReletedBooks.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchReletedBooks.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.reletedBooks = action.payload;
        })
        .addCase(fetchReletedBooks.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.reletedBooks = [];
            state.error = action.error?.message;
        })
    }
});

export default ReletedBooksSlice.reducer;