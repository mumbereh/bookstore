import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/book/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderBooks = () => {
    return books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ));
  };

  return (
    <div className="books-container">
      <ul className="books">{renderBooks()}</ul>
      <Form />
    </div>
  );
};

export default Books;
