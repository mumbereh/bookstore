import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = categoriesSlice.actions;

// Define and export the selector function
export const selectCategoryStatus = (state) => state.categories.status;

export default categoriesSlice.reducer;
