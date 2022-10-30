import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  avatar: {
    width: 0.13 * width,
    height: 0.06 * height,
    marginRight: 0.025 * width,
    borderRadius: 0.1 * width,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontSize: 13,
    color: "grey",
  },
  midContainer: {
    justifyContent: "space-around",
  },
});

export default styles;
