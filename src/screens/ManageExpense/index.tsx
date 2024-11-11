import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../types/navigationParams";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addExpense,
  cancelHandler,
  deleteExpense,
  setAmount,
  setDate,
  setDescription,
  setEditing,
} from "../../app/ExpenseSlice";
import MyIcon from "../../components/MyIcon";
import { GlobalStyles } from "../../constants/styles";
import { GapView, MyButton, MyInput } from "../../components";

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
  const isEditing = useSelector((state: RootState) => state.expense.isEditing);
  const amount = useSelector((state: RootState) => state.expense.amount);
  const description = useSelector(
    (state: RootState) => state.expense.description
  );
  const date = useSelector((state: RootState) => state.expense.date);

  useLayoutEffect(() => {
    dispatch(setEditing(!!editedExpenseId));
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      dispatch(cancelHandler());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  const confirmHandler = () => {
    if (amount && date && description) {
      dispatch(addExpense(editedExpenseId)), navigation.goBack();
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View>
          <View style={styles.amountDateContainer}>
            <MyInput
              width="50%"
              label="Amount"
              inputStyle={{ color: "white" }}
              placeholderColor={GlobalStyles.colors.primary75}
              placeholder="Amount"
              onChange={(text) => {
                dispatch(setAmount(text));
              }}
              text={amount}
              keyboardType="numeric"
            />
            <MyInput
              label="Date"
              width="50%"
              labelStyle={{ color: GlobalStyles.colors.primary200 }}
              inputStyle={{ color: "white" }}
              placeholderColor={GlobalStyles.colors.primary75}
              placeholder="YYYY-MM-DD"
              onChange={(text) => {
                dispatch(setDate(text));
              }}
              keyboardType="numeric"
              text={date}
            />
          </View>
          <MyInput
            label="Description"
            labelStyle={{ color: GlobalStyles.colors.primary200 }}
            placeholderColor={GlobalStyles.colors.primary75}
            multiline
            height={200}
            inputStyle={{ color: "white" }}
            placeholder="Description"
            onChange={(text) => {
              dispatch(setDescription(text));
            }}
            text={description}
          />
        </View>
        <GapView length={30} />
        <View style={styles.btnContainer}>
          <MyButton
            mode="flat"
            label="Cancel"
            style={styles.button}
            onPress={() => {
              dispatch(cancelHandler()), navigation.goBack();
            }}
          />
          <MyButton
            style={styles.button}
            label={isEditing ? "Update" : "Add"}
            onPress={() => {
              confirmHandler();
            }}
          />
        </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <MyIcon
              name="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={() =>
                dispatch(deleteExpense(editedExpenseId), navigation.goBack())
              }
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  amountDateContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-around",
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
