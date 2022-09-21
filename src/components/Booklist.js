import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Booklist = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      {
      booksList.map((book) => (
        <div key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />
        </div>
      ))
    }
      <AddBook />
    </div>
  );
};

export default Booklist;
