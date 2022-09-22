import React from 'react';
import '../Styling/Book.css';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
/* eslint-disable camelcase */

const Book = (props) => {
  const {
    title, author, item_id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container container">
      <div className="book-info-container">
        <h2>{title}</h2>
        <p>{author}</p>
        <h3>{category}</h3>
        <div className="book-actions-container">
          <p>Comments</p>
          <button
            type="submit"
            onClick={() => {
              dispatch(removeBook({
                title, author, item_id, category,
              }));
            }}
          >
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
      <div>63% COMPLETED</div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  item_id: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Book;
