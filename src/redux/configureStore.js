import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducerBook } from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: reducerBook.reducer,
    categories: categoriesReducer,
  },
}, applyMiddleware(thunk));

export default store;
