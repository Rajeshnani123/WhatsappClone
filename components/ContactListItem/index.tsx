import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { user } from "../../types";
import { styles } from "./style";
import { API, graphqlOperation } from "aws-amplify";
import {
  createChatRoom,
  createUserChatRoom,
} from "../../src/graphql/mutations";
import { userData } from "../../commonFunctions/awsServices";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: user;
  setLoader: Function;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user, setLoader } = props;
  const navigation = useNavigation();

  const onClick = async () => {
    setLoader(true);
    try {
      const chatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, {
          input: {},
        })
      );
      if (!chatRoomData.data) {
        console.log("Failed to create Chat room");
        return;
      }
      const newChatRoom = chatRoomData.data.createChatRoom;
      console.log(newChatRoom);
      await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: {
            userID: user.id,
            chatRoomID: newChatRoom.id,
          },
        })
      );
      const userInfo = await userData();
      await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: {
            userID: userInfo.attributes.sub,
            chatRoomID: newChatRoom.id,
          },
        })
      );
      setLoader(false);
      navigation.navigate("ChatRoomScreen", {
        id: newChatRoom.id,
        name: "Lets See",
        photo: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.status}>{user.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;
