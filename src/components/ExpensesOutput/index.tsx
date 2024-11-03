import { View, Text, FlatList } from "react-native";
import React from "react";

interface expensesOutput {
  expenses: Array<any>; // Replace with your actual expense type
}
const ExpensesOutput = ({ expenses }: expensesOutput) => {
  return (
    <View>
      <View>
        <Text>last 7 days</Text>
        <Text>$188.99</Text>
      </View>
    </View>
  );
};

export default ExpensesOutput;
