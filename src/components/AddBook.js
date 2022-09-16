import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add a new book</h2>
    <form>
      <input placeholder="Title" />
      <input placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
