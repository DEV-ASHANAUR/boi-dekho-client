import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBook } from './bookApi';

const initialState = {
    book: {},
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchBook = createAsyncThunk("books/fetchBook", async (id) => {
    const book = await getBook(id);
    return book;
})

export const bookSlice = createSlice({
    name: "book",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(fetchBook.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.book = action.payload;
            })
            .addCase(fetchBook.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.book = {};
                state.error = action.error?.message;
            })
    }
});

export default bookSlice.reducer;