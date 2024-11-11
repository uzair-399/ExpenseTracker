import React, { memo, useState } from "react";
import { MyInputProps } from "../../types";
import {
  DimensionValue,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import MyText from "../MyText";
import { GlobalStyles } from "../../constants/styles";

function MyInput({
  label,
  multiline,
  placeholder,
  password = false,
  onChange,
  text,
  style,
  inputStyle,
  placeholderColor,
  width,
  height,
  labelStyle,
  keyboardType,
}: MyInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  return (
    <View style={[styles({ width }).container, style]}>
      {label && (
        <MyText
          style={[{ marginBottom: 2 }, labelStyle]}
          textColor={GlobalStyles.colors.primary60}
        >
          {label}
        </MyText>
      )}
      <View style={styles({ height }).inputContainer}>
        <TextInput
          multiline={multiline}
          secureTextEntry={password ? (showPassword ? false : true) : false}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor ? placeholderColor : "#888888"}
          value={text!}
          onChangeText={(val): void => onChange?.(val)}
          style={[
            inputStyle,
            styles({ width, password }).InputStyle,
            multiline && { textAlignVertical: "top" }, // Align text to top when multiline is true
          ]}
          keyboardType={keyboardType}
        />
        {password && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginLeft: -20 }}
          >
            {/* {showPassword ? <EyeClosed /> : <EyeClosed />} */}
          </Pressable>
        )}
      </View>
    </View>
  );
}
const styles = ({
  width,
  password,
  height,
}: {
  width?: DimensionValue | undefined;
  password?: boolean;
  height?: DimensionValue | undefined;
}) =>
  StyleSheet.create({
    container: {
      width: width ? width : "100%",
      paddingHorizontal: 10,
    },
    inputContainer: {
      backgroundColor: GlobalStyles.colors.primary60,
      borderRadius: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: height ? height : 50,
      paddingHorizontal: 10,
    },
    InputStyle: {
      width: password ? "90%" : "100%",
    },
  });

export default memo(MyInput);
