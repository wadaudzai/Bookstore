const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    title: 'walid',
    author: 'walid',
  },
  {
    title: 'walid',
    author: 'walid',
  }];

const reducerBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD, book,
});

export const removeBook = (id) => ({
  type: REMOVE, id,
});

export default reducerBook;
