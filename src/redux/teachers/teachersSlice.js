import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./teachersOperations";

const initialState = {
  teachers: [],
  isLoading: false,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachers = payload;
      })
      .addCase(getTeachers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default teachersSlice.reducer;
