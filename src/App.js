import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Books from './components/Book';
import Categories from './components/Categories';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
