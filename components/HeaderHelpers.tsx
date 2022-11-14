import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { Logout } from "../commonFunctions/awsServices";
import ActivityLoader from "./ActivityLoader";

const { width } = Dimensions.get("screen");
export const HeaderHelper = ({
  shown,
  setShow,
}: {
  shown: boolean;
  setShow: Function;
}) => {
  const [loader, setLoader] = React.useState(false);
  const navigation = useNavigation();
  const onLogout = async () => {
    setLoader(true);
    const resposne = await Logout();
    if (resposne) {
      setLoader(false);
      navigation.replace("Login");
    }
  };

  const options = [
    {
      key: 1,
      title: "Logout",
      onPress: () => onLogout(),
    },
    {
      key: 2,
      title: "Settings",
      onPress: () => null,
    },
  ];
  return (
    <Modal animationType="slide" transparent={true} visible={shown}>
      <View style={styles.centeredView}>
        <ActivityLoader loading={loader} />
        <TouchableOpacity onPress={() => setShow(!shown)}>
          <Entypo name="cross" size={30} color={"black"} />
        </TouchableOpacity>
        {options.map((data, index) => (
          <TouchableOpacity
            style={styles.modalView}
            onPress={data.onPress}
            key={index}
          >
            <Text>{data.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 0.155 * width,
    justifyContent: "space-between",
    marginRight: 0.02 * width,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: width * 0.7,
    marginTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
