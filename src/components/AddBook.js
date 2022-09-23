import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../Styling/AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const [categoryTitle, setCategory] = useState('');

  return (
    <div className="form-container">
      <h3 className="add-book">ADD NEW BOOK</h3>
      <form className="form">
        <input placeholder="Book Title" name="title" value={titleName} onInput={(e) => setTitle(e.target.value)} className="input" />
        <input placeholder="Author" name="author" value={authorName} onInput={(e) => setAuthor(e.target.value)} className="input" />
        <select
          name="categories"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
          className="input"
        >
          <option value="">Category</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              title: titleName,
              author: authorName,
              item_id: uuidv4(),
              category: categoryTitle,
            }));
            setTitle('');
            setAuthor('');
            setCategory('');
          }}
          className="button-add"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
