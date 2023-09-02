import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/book/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      id,
      ...book,
    }));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const categories = [
    'Science Fiction',
    'Horror',
    'Fantasy',
    'Non-fiction',
    'Historical Fiction',
    'Self-Help',
    'Graphic Novel',
    'Other',
  ];

  return (
    <div className="form-section">
      <hr />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={book.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleInputChange}
          required
        />
        <select
          name="category"
          value={book.category}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
