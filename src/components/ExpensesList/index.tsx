import { FlatList, Text } from "react-native";
import React from "react";
import { ExpensesListProps } from "../../types";
import ExpenseItem from "../ExpenseItem";

type renderExpenseProps = {
  item: {
    id?: string;
    date?: Date;
    description?: string;
    amount?: number;
  };
};

function renderExpenseItem(itemData: renderExpenseProps) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item, index) => item.id ?? index.toString()}
    />
  );
}

export default ExpensesList;
