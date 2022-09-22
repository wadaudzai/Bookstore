import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const [categoryTitle, setCategory] = useState('');

  return (
    <div className="container flex-column">
      <h3>ADD NEW BOOK</h3>
      <form className="flex">
        <input placeholder="Book Title" name="title" value={titleName} onInput={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" name="author" value={authorName} onInput={(e) => setAuthor(e.target.value)} />
        <select
          name="categories"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
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
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
