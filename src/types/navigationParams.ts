// import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
  ManageExpense: { expenseId?: string } | undefined; // Allow expenseId as an optional parameter
  // D1Nav: NavigatorScreenParams<D1ParamsList>;
};

export type BottomTabParamsList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

// export type D1ParamsList = {
//   Profile: undefined;
//   Favorite: undefined; // wishlist
//   OrderHistory: undefined;
//   DeleteAccount: undefined;
//   // add more screens likewise
// };
