import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUp, userData } from "../commonFunctions/awsServices";

const { width, height } = Dimensions.get("screen");
const LoginScreen = () => {
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation();
  const onClick = () => {
    if (phone && password && email) {
      SignUp(phone, password, email);
      navigation.navigate("OTPScreen", { user: phone });
    } else {
      alert("sorry, please fill all the fields");
    }
  };

  React.useLayoutEffect(() => {
    const user = async () => {
      const data = await userData();
      if (data) {
        console.log("darta");
        navigation.replace("Root");
      }
    };
    user();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Enter your Details Below</Text>
        <Text>We need to verify your Details. </Text>
        <View style={styles.countryText}>
          <Text style={{ paddingLeft: width * 0.2 }}>India</Text>
          <AntDesign
            name="caretdown"
            size={14}
            color="#25D366"
            style={styles.dropDown}
          />
        </View>
        <View style={styles.phoneNumberField}>
          <TextInput
            placeholder="+   91"
            value="+   91"
            keyboardType="numeric"
            style={styles.phoneNumber}
          />
          <TextInput
            placeholder="phone number"
            keyboardType="numeric"
            style={styles.phoneNumber2}
            onChangeText={(text) => setPhone(text)}
            maxLength={10}
          />
        </View>
        <View style={styles.countryText}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.countryText}>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Do you already have an account?
        </Text>
      </View>
      <View style={styles.doneButton}>
        <Button title="Next" onPress={onClick} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: height * 0.02,
    width: width,
    height: height * 0.6,
  },
  mainText: {
    color: "#075E54",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: height * 0.02,
  },
  countryText: {
    flexDirection: "row",
    marginTop: height * 0.03,
    borderBottomColor: "#25D366",
    borderBottomWidth: 1,
    width: width * 0.6,
  },
  phoneNumberField: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: height * 0.03,
    width: width * 0.6,
  },
  dropDown: {
    alignSelf: "flex-end",
    paddingLeft: width * 0.26,
    paddingBottom: height * 0.008,
  },
  phoneNumber: {
    width: width * 0.1,
    borderBottomColor: "#25D366",
    borderBottomWidth: 2,
  },
  phoneNumber2: {
    width: width * 0.45,
    borderBottomColor: "#25D366",
    borderBottomWidth: 2,
  },
  doneButton: {
    padding: width * 0.4,
  },
  signUpText: {
    marginVertical: height * 0.03,
    color: "blue",
    fontWeight: "bold",
  },
});
