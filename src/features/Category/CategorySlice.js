import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {addCategory, getCategories} from './CategoryApi';

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories",async()=>{
    const categories = await getCategories();
    return categories;
})
export const createCategory = createAsyncThunk("order/createCategory", async (data) => {
    const category = await addCategory(data);
    return category;
})

export const categorySlice = createSlice({
    name:"category",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.categories = action.payload;
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.categories = [];
            state.error = action.error?.message;
        }).addCase(createCategory.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.categories = action.payload;
        })
        .addCase(createCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.categories = [];
            state.error = action.error?.message;
        })
    }
});

export default categorySlice.reducer;