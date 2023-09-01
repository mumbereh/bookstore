import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pSAp1ecgeQgiYDZ4m1ew/';

// Async Thunks
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseApiUrl}books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(`${baseApiUrl}books`, book);
  return response.data === 'Created' ? book : null;
});

export const removeBook = createAsyncThunk('books/removeBook', async (ITEM_ID) => {
  const response = await axios.delete(`${baseApiUrl}books/${ITEM_ID}`);
  return response.data === 'The book was deleted successfully!' ? ITEM_ID : null;
});

export const fetchInitialBooks = createAsyncThunk('books/fetchInitialBooks', async () => {
  const response = await axios.get(`${baseApiUrl}books`);
  return response.data;
});

// Initial State
const initialState = {
  books: [],
  error: '',
  loading: true,
};

// Slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        if (action.payload !== '') {
          const keys = Object.keys(action.payload);
          state.books = keys.map((bookId) => ({ item_id: bookId, ...action.payload[bookId][0] }));
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.error = 'No result was found!';
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.loading = 'succeeded';
          state.error = '';
          state.books.push(action.payload);
        } else {
          state.loading = 'failed';
          state.error = 'Unable to add record!';
        }
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.loading = 'succeeded';
          state.error = '';
          state.books = state.books.filter((bookId) => bookId.item_id !== action.payload);
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.loading = 'failed';
          state.error = 'Unable to remove record!';
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchInitialBooks.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchInitialBooks.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        const keys = Object.keys(action.payload);
        state.books = keys.map((bookId) => ({ item_id: bookId, ...action.payload[bookId][0] }));
        if (state.books.length === 0) state.error = 'No result was found!';
      })
      .addCase(fetchInitialBooks.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
