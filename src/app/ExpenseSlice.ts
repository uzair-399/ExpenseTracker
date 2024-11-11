import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFormattedDate } from "../utils/date";

// Define the Expense type
type Expense = {
  id: string;
  amount: number;
  description: string;
  date: string; // Store date as a string
};

interface ExpenseState {
  expenses: Expense[];
  isEditing: boolean;
  amount: string; // Change this to string
  description: string;
  date: string;
}

const initialState: ExpenseState = {
  expenses: [],
  isEditing: false,
  amount: "", // Initialize as an empty string
  description: "",
  date: "",
};

const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    // In your ExpenseSlice
    addExpense: (state, action) => {
      if (state.isEditing) {
        const index = state.expenses.findIndex(
          (expense) => expense.id === action.payload
        );
        if (index !== -1) {
          state.expenses[index] = {
            ...state.expenses[index],
            amount: parseFloat(state.amount), // Convert to number here
            description: state.description,
            date: state.date, // Already in YYYY-MM-DD format
          };
        } else {
          console.log("empty");
        }
      } else {
        const id = (Math.random() * 100).toString() + Math.random().toString();
        const expense: Expense = {
          id,
          amount: parseFloat(state.amount), // Convert to number here
          description: state.description,
          date: state.date, // Store date in YYYY-MM-DD format
        };
        state.expenses.push(expense);
      }
      state.amount = "";
      state.description = "";
      state.date = "";
    },

    deleteExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload
      );
      if (index !== -1) {
        state.expenses.splice(index, 1);
      }
    },
    updateExpense: (state, action: PayloadAction<string>) => {
      const selectedExpense = state.expenses.find(
        (expense) => expense.id === action.payload
      );
      if (selectedExpense) {
        state.amount = selectedExpense.amount.toString(); // Convert to string for the state
        state.description = selectedExpense.description;
        state.date = selectedExpense.date;
      }
    },
    cancelHandler: (state) => {
      state.amount = "";
      state.description = "";
      state.date = "";
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
  updateExpense,
  cancelHandler,
} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
