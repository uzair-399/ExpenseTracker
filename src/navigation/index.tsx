import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { ManageExpense } from "../screens";
import ExpenseOverview from "./ExpenseOverview";

const Stack = createNativeStackNavigator();

export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ExpenseOverview"
          component={ExpenseOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
