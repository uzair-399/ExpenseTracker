import { View, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../types/navigationParams";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"; // Import RootState type
import { setEditing } from "../../app/ExpenseSlice";
import MyIcon from "../../components/MyIcon";
import { GlobalStyles } from "../../constants/styles";
import { MyButton } from "../../components";

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
  const dispatch = useDispatch();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = useSelector((state: RootState) => state.expense.isEditing); // Type the selector with RootState

  useLayoutEffect(() => {
    dispatch(setEditing(editedExpenseId));
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <MyButton
          mode="flat"
          label="Cancel"
          style={styles.button}
          onPress={() => cancelHandler()}
        />
        <MyButton
          style={styles.button}
          label={isEditing ? "Update" : "Add"}
          onPress={() => confirmHandler()}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <MyIcon
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => deleteExpenseHandler()}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,

    marginHorizontal: 8,
  },
});
