import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const API_KEY = 'AE5JhQ2PsiUw2mMfov0Y';
const GET = 'bookstore/books/GET_BOOK';

const initialState = [];

export const addBook = createAsyncThunk(
  ADD,
  async (book) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        book,
      ),
    });
    if (response.ok) {
      return book;
    }
    throw response;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE,
  async (book) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books/${book.item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return book;
    }
    throw response;
  },
);

export const getBooks = createAsyncThunk(
  GET,
  async () => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`);
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const reducerBook = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push(action.payload);
    })
      .addCase(removeBook.fulfilled, (state, action) => state.filter(
        (book) => book.item_id !== action.payload.item_id,
      ))
      .addCase(getBooks.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ));
  },

});
