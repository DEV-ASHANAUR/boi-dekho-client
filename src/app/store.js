import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/books/BooksSlice';
import categoryReducer from '../features/Category/CategorySlice';
import subCategoryReducer from '../features/SubCategory/SubCategorySlice';
import authorReducer from '../features/Author/AuthorSlice';
import publisherReducer  from '../features/Publisher/PublisherSlice';
import filterReducer from '../features/Filter/filterSlice'
export const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    author:authorReducer,
    publisher:publisherReducer,
    filter: filterReducer
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch