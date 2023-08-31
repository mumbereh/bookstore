import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/book/booksSlice';
import { v4 as uuidv4 } from 'uuid'; 
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const handleAddBook = (book) => {
    const newBook = { ...book, item_id: uuidv4() };
    dispatch(addBook(newBook));
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
