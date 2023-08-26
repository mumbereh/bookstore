import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'The Great Gatsby', author: 'Scott Fitzgerald' },
    { id: uuidv4(), title: 'Moby Dick', author: 'Herman Melville' },
    { id: uuidv4(), title: 'War and Peace', author: 'Leo Tolstoy' },
    { id: uuidv4(), title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: uuidv4() }]);
  };

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form addBook={addBook} />
    </>
  );
};

export default Books;
