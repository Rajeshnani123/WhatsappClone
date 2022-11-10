import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export const InputBox = () => {
  const [message, setMessage] = React.useState("");

  const onMicrophone = () => {
    console.log(":Enter the microPhone");
  };

  const onSend = () => {
    console.log(":Enter the Send");
  };

  const onPress = () => {
    message ? onSend() : onMicrophone();
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name={"laugh-beam"} size={24} color="grey" />
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Entypo
          name={"attachment"}
          size={24}
          color="grey"
          style={styles.icons}
        />
        {!message && (
          <Fontisto
            name={"camera"}
            size={24}
            color="grey"
            style={styles.icons}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
