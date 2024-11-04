import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";

import { ExpensesOutputProps } from "../../types";
import ExpensesList from "../ExpensesList";
import { DummyData } from "../../constants/DummyData";

function ExpensesOutput({ expensesPeriod }: ExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={DummyData} periodName={expensesPeriod} />
      <ExpensesList expenses={DummyData} />
    </View>
  );
}

export default ExpensesOutput;
