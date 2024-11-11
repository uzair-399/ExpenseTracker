import { View, Text } from "react-native";
import React from "react";
import { ExpensesOutput } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const AllExpenses = () => {
  const fetchedExpenses = useSelector(
    (state: RootState) => state.expense.expenses
  );

  // Convert each expense's date from string to Date
  const formattedExpenses = fetchedExpenses.map((expense) => ({
    ...expense,
    date: new Date(expense.date), // Convert date string to Date object
  }));

  return <ExpensesOutput expenses={formattedExpenses} expensesPeriod="Total" />;
};

export default AllExpenses;
