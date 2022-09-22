import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const API_KEY = 'AE5JhQ2PsiUw2mMfov0Y';
const GET = 'bookstore/books/GET_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD, book,
});

export const removeBook = (book) => ({
  type: REMOVE, book,
});

const reducerBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
};

export default reducerBook;
