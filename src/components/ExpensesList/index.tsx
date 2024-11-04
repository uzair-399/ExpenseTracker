import { FlatList, Text } from "react-native";
import React from "react";

import { ExpensesListProps } from "../../types";

type renderExpenseProps = {
  item: {
    id?: string;
    date?: Date;
    description?: string;
    amount?: number;
  };
};

function renderExpenseItem({ item }: renderExpenseProps) {
  return <Text>{item.description}</Text>;
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
