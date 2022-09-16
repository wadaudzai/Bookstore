import React from 'react';
import '../Styling/Book.css';
import propTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-container container">
      <div className="book-info-container">
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions-container">
          <p>Comments</p>
          <p>Remove</p>
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
};

export default Book;
