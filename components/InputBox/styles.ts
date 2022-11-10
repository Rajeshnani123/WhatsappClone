import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "flex-end",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#25D366",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    width: 30,
    marginHorizontal: 5,
  },
});

export default styles;
