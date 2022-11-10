import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25D366",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.05,
    left: width * 0.35,
  },
});

export default styles;
