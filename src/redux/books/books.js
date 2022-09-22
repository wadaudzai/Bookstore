const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

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

export const addBook = (book) => ({
  type: ADD, book,
});

export const removeBook = (book) => ({
  type: REMOVE, book,
});

export default reducerBook;
