import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChatRoom, user } from "../../types";
import { styles } from "./style";

export type ContactListItemProps = {
  user: user;
};

const ContactListItem = (props: ContactListItemProps) => {
  const navigation = useNavigation();
  const { user } = props;

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
          <Text style={styles.status}>{user.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;
