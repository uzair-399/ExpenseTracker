import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import MyText from "../MyText";
import { ExpenseItemProps } from "../../types";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";

function ExpenseItem({ description, date, amount }: ExpenseItemProps) {
  // Format date to a readable string, e.g., "YYYY-MM-DD" or "MM/DD/YYYY"
  //   const formattedDate = date?.toLocaleDateString();

  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <MyText
            textColor={GlobalStyles.colors.primary50}
            size={16}
            weight="bold"
            style={styles.description}
          >
            {description}
          </MyText>
          <MyText textColor={GlobalStyles.colors.primary50}>
            {getFormattedDate(date)}
          </MyText>
        </View>
        <View style={styles.amountContainer}>
          <MyText weight="bold" textColor={GlobalStyles.colors.primary500}>
            {amount?.toFixed(2)}
          </MyText>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  description: {
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    height: 45,
  },
});
