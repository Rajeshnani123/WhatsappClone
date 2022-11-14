import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
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
import { confirmUser, resenedOtp } from "../commonFunctions/awsServices";
import { RootStackParamList } from "../types";

const { width, height } = Dimensions.get("screen");
export const OTPScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "OTPScreen">>();
  const [otp, setOtp] = React.useState("");
  const inputRef: any = React.useRef();
  const { user } = route.params;
  const resend = () => {
    resenedOtp(user);
  };
  const awsConfirmUser = async () => {
    const value = await confirmUser(user, otp);
    if (value) {
      navigation.replace("Root");
    } else {
      alert("Enter the valid OTP");
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Otp Screen</Text>
        <Text>Please check your email</Text>
        <Text
          style={styles.nextText}
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          Do you want to Change the Details?
        </Text>
        <TextInput
          value={otp}
          style={{ opacity: 0, position: "absolute" }}
          ref={inputRef}
          onChangeText={(text) => setOtp(text)}
          keyboardType="number-pad"
          placeholder="one"
        />
        <View style={{ flexDirection: "row", paddingTop: height * 0.05 }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              style={styles.otpInput}
              autoFocus
              key={index}
              onFocus={() => inputRef.current.focus()}
              keyboardType="number-pad"
              autoComplete="sms-otp"
              maxLength={1}
              placeholder="_"
              value={otp[index]}
            />
          ))}
        </View>
        <Text
          style={[styles.nextText, { fontWeight: "bold" }]}
          onPress={resend}
        >
          Resend Otp?
        </Text>
      </View>

      <View style={styles.nextContainer}>
        <Button title="Verify" onPress={awsConfirmUser} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: height * 0.04,
    width: width,
    height: height * 0.6,
  },
  nextContainer: {
    alignItems: "center",
  },
  nextText: {
    color: "blue",
    paddingTop: height * 0.02,
  },
  otpInput: {
    height: height * 0.05,
    textAlign: "center",
    width: width * 0.1,
    marginHorizontal: width * 0.01,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 15,
  },
  doneButton: {
    padding: width * 0.4,
  },
});
