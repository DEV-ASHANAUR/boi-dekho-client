import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/books/BooksSlice';
import bookReducer from '../features/book/bookSlice';
import categoryReducer from '../features/Category/CategorySlice';
import subCategoryReducer from '../features/SubCategory/SubCategorySlice';
import authorReducer from '../features/Author/AuthorSlice';
import publisherReducer  from '../features/Publisher/PublisherSlice';
import filterReducer from '../features/Filter/filterSlice'
import cartReducer from '../features/Cart/CartSlice'
import authReducer from '../features/Auth/AuthSlice';
import reviewReducer from '../features/review/reviewSlice';
import reletedBookReducer from '../features/reletedBooks/reletedBooksSlice';
import shippingReducer from '../features/shipping/shippingSlice';
export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    author:authorReducer,
    publisher:publisherReducer,
    filter: filterReducer,
    cart: cartReducer,
    auth:authReducer,
    review:reviewReducer,
    reletedBooks: reletedBookReducer,
    shipping:shippingReducer,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch