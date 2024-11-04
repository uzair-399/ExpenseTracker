import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllExpenses, RecentExpenses } from "../screens";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import MyIcon from "../components/MyIcon";

const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white", // neeche wala comment isko refer kr rha
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => {
          return <MyIcon name="add" size={24} color={tintColor} />; //tint color is exposed by default which is defined earlier
        },
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ExpenseOverview;
