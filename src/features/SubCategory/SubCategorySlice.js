import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getSubCategories} from './SubCategoryApi';

const initialState = {
    subcategories: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchSubCategories = createAsyncThunk("subcategories/fetchSubCategories",async()=>{
    const subcategories = await getSubCategories();
    return subcategories;
})

export const subCategorySlice = createSlice({
    name:"subCategory",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchSubCategories.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchSubCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.subcategories = action.payload;
        })
        .addCase(fetchSubCategories.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.subcategories = [];
            state.error = action.error?.message;
        })
    }
});

export default subCategorySlice.reducer;