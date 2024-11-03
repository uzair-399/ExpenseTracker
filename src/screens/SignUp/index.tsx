import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import {
  RootStackParamsList,
  BottomTabParamsList,
} from "../../types/navigationParams";
import { MyTheme } from "../../types";
import { ScrollView, View } from "react-native";
import MyText from "../../components/MyText";

type SignUpNavigationProps = NativeStackScreenProps<
  RootStackParamsList & BottomTabParamsList,
  "SignUp"
>;

export default function SignUn() {
  const navigation = useNavigation<SignUpNavigationProps["navigation"]>();
  const theme = useTheme() as MyTheme;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <MyText> SignUp</MyText>
      </View>
    </ScrollView>
  );
}
