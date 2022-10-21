import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { View, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export const HeaderComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 0.155 * width,
        justifyContent: "space-between",
        marginRight: 0.02 * width,
      }}
    >
      <Octicons name="search" size={22} color={"white"} />
      <MaterialCommunityIcons name="dots-vertical" size={22} color={"white"} />
    </View>
  );
};
