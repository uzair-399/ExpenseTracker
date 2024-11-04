import React, { memo } from "react";
import { Text, TextStyle, TextProps } from "react-native";

import { MyTextProps } from "../../types/index";

function MyText({
  text,
  children,
  textColor,
  weight,
  size,
  style,
  numberOfLines,
}: MyTextProps & TextProps) {
  const textStyle: TextStyle = {
    color: textColor || "black",
    fontWeight: weight || "normal",
    fontSize: size || 14,
  };

  return (
    <Text style={[textStyle, style]} numberOfLines={numberOfLines}>
      {children || text}
    </Text>
  );
}

export default memo(MyText);
