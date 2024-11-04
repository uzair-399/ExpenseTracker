import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  initialState: {
    isEditing: false,
  },
  name: "expense",
  reducers: {
    setEditing: (state, action) => {
      const edit = !!action.payload;
      state.isEditing = edit;
    },
  },
});

export const { setEditing } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
