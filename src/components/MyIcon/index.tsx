import { View, Pressable, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { MyIconProps } from "../../types";
function MyIcon({ name, size, color, onPress }: MyIconProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export default MyIcon;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
