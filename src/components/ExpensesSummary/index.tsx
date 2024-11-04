import { View, Text } from "react-native";
import React from "react";
import { ExpensesSummaryProps } from "../../types";

function ExpensesSummary({ periodName, expenses }: ExpensesSummaryProps) {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum?.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
