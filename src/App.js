import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
