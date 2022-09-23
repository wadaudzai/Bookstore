import React from 'react';
import '../Styling/Book.css';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import percentage from '../images/percentage.jpeg';
/* eslint-disable camelcase */

const Book = (props) => {
  const {
    title, author, item_id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container container">
      <div className="book-info-container">
        <div>
          <h3 className="category-text">{category}</h3>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="book-actions-container">
          <p className="author">Comments</p>
          <button
            className="button_remove"
            type="submit"
            onClick={() => {
              dispatch(removeBook({
                title, author, item_id, category,
              }));
            }}
          >
            Remove
          </button>
          <p className="author">Edit</p>
        </div>
      </div>
      <div className="progress-tab">
        <div>
          <div className="percentage-holder">
            <img src={percentage} alt="percentage" className="percentage-photo" />
          </div>
        </div>
        <div className="current-info">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="btn-progress">UPDATE PROGRESS</button>
        </div>
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
