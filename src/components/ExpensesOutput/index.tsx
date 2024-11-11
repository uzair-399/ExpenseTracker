import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";

import { ExpensesOutputProps } from "../../types";
import ExpensesList from "../ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { DummyData } from "../../constants/DummyData";

function ExpensesOutput({ expensesPeriod }: ExpensesOutputProps) {
  const fetchedExpense = useSelector(
    (state: RootState) => state.expense.expenses
  );
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={fetchedExpense} periodName={expensesPeriod} />
      <ExpensesList expenses={fetchedExpense} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
