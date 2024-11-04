import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";

import { ExpensesOutputProps } from "../../types";
import ExpensesList from "../ExpensesList";
import { DummyData } from "../../constants/DummyData";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expensesPeriod }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DummyData} periodName={expensesPeriod} />
      <ExpensesList expenses={DummyData} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 10,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
