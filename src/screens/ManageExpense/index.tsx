import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../types/navigationParams";

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
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>
        {editedExpenseId
          ? `Editing Expense ID: ${editedExpenseId}`
          : "Adding New Expense"}
      </Text>
    </View>
  );
};

export default ManageExpense;
