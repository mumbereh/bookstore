import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/book/booksSlice';
import Book from './Book';
import Form from './Form'; // Assuming you have imported the Form component here

const Books = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book key={book.item_id} title={book.title} author={book.author} onRemove={() => handleRemove(book.item_id)} />
        ))}
      </ul>
      <Form addBook={handleAddBook} />
    </div>
  );
};

export default Books;
