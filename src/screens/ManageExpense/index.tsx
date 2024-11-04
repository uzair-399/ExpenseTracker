import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../types/navigationParams";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"; // Import RootState type
import { setEditing } from "../../app/ExpenseSlice";

type ManageExpenseScreenRouteProp = RouteProp<
  RootStackParamsList,
  "ManageExpense"
>;
type ManageExpenseScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "ManageExpense"
>;

interface ManageExpenseProps {
  route: ManageExpenseScreenRouteProp;
  navigation: ManageExpenseScreenNavigationProp;
}

const ManageExpense: React.FC<ManageExpenseProps> = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const dispatch = useDispatch();
  dispatch(setEditing(editedExpenseId));

  const isEditing = useSelector((state: RootState) => state.expense.isEditing); // Type the selector with RootState

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>{isEditing ? "Editing an Expense" : "Adding a New Expense"}</Text>
    </View>
  );
};

export default ManageExpense;
