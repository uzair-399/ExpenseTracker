import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";

import { ExpensesOutputProps } from "../../types";
import ExpensesList from "../ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expensesPeriod, expenses }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
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
