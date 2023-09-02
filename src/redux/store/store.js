import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from '../book/booksSlice';
import categoriesReducer from '../categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
