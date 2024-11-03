import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";

import { ExpensesOutputProps } from "../../types";
import ExpensesList from "../ExpensesList";

function ExpensesOutput() {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
