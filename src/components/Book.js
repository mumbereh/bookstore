import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/booksSlice';

const Book = (props) => {
  // Destructure props
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  // Event handler for removing a book
  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <div className="left-block">
        <div className="book-info">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="list-btn">
          {/* Add comments for button purposes */}
          <button type="button">Comments</button>
          |
          <button
            type="button"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="right-block">
        <div className="reading-progress">
          <div className="progress" />
          <div className="progress-percentage">
            <span className="percentage">63%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <hr className="vertical-line" />
        <div className="current-chapter">
          <span className="heading">CURRENT CHAPTER</span>
          <span className="chapter">Chapter 17</span>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

// Define PropTypes for the Book component
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
