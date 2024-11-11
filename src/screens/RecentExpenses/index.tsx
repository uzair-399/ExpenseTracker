import React from "react";
import { ExpensesOutput } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { dateMinusDays } from "../../utils/date";

const RecentExpenses = () => {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date); // Convert date string to Date object
    const date7daysAgo = dateMinusDays(new Date(), 7);
    return expenseDate >= date7daysAgo;
  });

  return (
    <ExpensesOutput expenses={filteredExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
