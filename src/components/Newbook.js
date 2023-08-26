import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = [
    { id: uuidv4(), title: 'Grown young', author: 'Sarango Mageya' },
  ];

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
