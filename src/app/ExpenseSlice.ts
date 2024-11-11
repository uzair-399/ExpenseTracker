import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Expense type
type Expense = {
  id: string;
  amount: number;
  description: string;
  date: string; // Store date as a string
};

// Define the slice's state
interface ExpenseState {
  expenses: Expense[];
  isEditing: boolean;
  amount: number;
  description: string;
  date: string;
}

const initialState: ExpenseState = {
  expenses: [], // Initialize as empty
  isEditing: false,
  amount: 0,
  description: "",
  date: "", // Empty initial date
};

const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    addExpense: (state) => {
      const id = (Math.random() * 100).toString() + Math.random().toString();
      const expense: Expense = {
        id,
        amount: state.amount,
        description: state.description,
        date: new Date(state.date).toISOString(), // Store date as an ISO string
      };
      state.expenses.push(expense);
      state.amount = 0;
      state.description = "";
      state.date = ""; // Reset date to empty string
    },
    deleteExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload
      );
      if (index !== -1) {
        state.expenses.splice(index, 1);
      }
    },
  },
});

export const {
  setEditing,
  setAmount,
  setDate,
  setDescription,
  addExpense,
  deleteExpense,
} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
