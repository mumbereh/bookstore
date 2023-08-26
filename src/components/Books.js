import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'Grown young', author: 'Sarango Mageya' },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} onRemove={() => removeBook(book.id)} />
        ))}
      </ul>
      <Form addBook={addBook} />
    </div>
  );
};

export default Books;
