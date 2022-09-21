import { configureStore } from '@reduxjs/toolkit';
import reducerBook from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: reducerBook,
    categories: categoriesReducer,
  },
});

export default store;
