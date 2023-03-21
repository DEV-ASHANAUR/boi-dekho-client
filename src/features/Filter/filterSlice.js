import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    publisher: [],
    author: [],
    category: [],
    subcategory: [],
    sort:"-createdAt",
    search: "",
    page: 1,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        publisherSelected: (state, action) => {
            state.page = 1;
            state.publisher.push(action.payload);
        },
        publisherRemoved: (state, action) => {
            state.page = 1;
            const indexToRemove = state.publisher.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.publisher.splice(indexToRemove, 1);
            }
        },
        authorSelected: (state, action) => {
            state.page = 1;
            state.author.push(action.payload);
        },
        authorRemoved: (state, action) => {
            state.page = 1;
            const indexToRemove = state.author.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.author.splice(indexToRemove, 1);
            }
        },
        categorySelected: (state, action) => {
            state.page = 1;
            state.category.push(action.payload);
        },
        categoryRemoved: (state, action) => {
            state.page = 1;
            const indexToRemove = state.category.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.category.splice(indexToRemove, 1);
            }
        },
        subcategorySelected: (state, action) => {
            state.page = 1;
            state.subcategory.push(action.payload);
        },
        subcategoryRemoved: (state, action) => {
            state.page = 1;
            const indexToRemove = state.subcategory.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.subcategory.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.page = 1;
            state.search = action.payload;
        },
        sortBy: (state, action) => {
            state.page = 1;
            state.sort = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        resetFilter: (state) => {
            state.author = [];
            state.publisher = [];
            state.category = [];
            state.subcategory = [];
            state.search = "";
            state.page = 1;
        }
    }
});

export default filterSlice.reducer;
export const { publisherSelected,publisherRemoved,authorSelected, authorRemoved,categorySelected,categoryRemoved,subcategorySelected,subcategoryRemoved, searched, setPage,sortBy,resetFilter } = filterSlice.actions;