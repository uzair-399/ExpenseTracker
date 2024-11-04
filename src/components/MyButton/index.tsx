import { memo } from "react";
import {
  Pressable,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

import { MyButtonProps } from "../../types";
import MyText from "../MyText";
import { GlobalStyles } from "../../constants/styles";

function MyButton({
  label,
  onPress,
  textColor,
  backgroundColor,
  style,
  labelStyle,
  chevron,
  disabled,
  mode,
}: MyButtonProps) {
  const buttonStyle: ViewStyle = {
    backgroundColor: backgroundColor || GlobalStyles.colors.primary500,
    borderRadius: 4,
    padding: 8,
    ...style,
  };

  const buttonTextStyle: TextStyle = {
    color: textColor || "white",
    fontSize: 14,
    textAlign: "center",
    ...labelStyle,
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[buttonStyle, mode === "flat" && styles.flat]}>
        <MyText style={[buttonTextStyle, mode === "flat" && styles.flatText]}>
          {label}
        </MyText>
        {chevron && (
          <Feather
            name="chevron-right"
            size={14}
            color={"#ffffff"}
            style={styles.icon}
          />
        )}
      </View>
    </Pressable>
  );
}

export default memo(MyButton);

const styles = StyleSheet.create({
  icon: {
    textAlignVertical: "center",
    marginLeft: 10,
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
    opacity: 0.75,
  },
});
