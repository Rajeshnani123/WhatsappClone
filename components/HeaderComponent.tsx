import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderHelper } from "./HeaderHelpers";

const { width } = Dimensions.get("screen");
export const HeaderComponent = () => {
  const [shown, setShow] = React.useState(false);
  const onClick = () => {
    setShow(!shown);
  };

  return (
    <View style={styles.container}>
      <Octicons name="search" size={22} color={"white"} />
      <TouchableOpacity onPress={onClick}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={22}
          color={"white"}
        />
        {shown && <HeaderHelper shown setShow={() => onClick()} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 0.155 * width,
    justifyContent: "space-between",
    marginRight: 0.02 * width,
  },
});
