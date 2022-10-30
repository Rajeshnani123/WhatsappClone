import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation();
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ChatRoomScreen", {
          name: user.name,
          photo: user.imageUri,
        })
      }
    >
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.time}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatListItem;
