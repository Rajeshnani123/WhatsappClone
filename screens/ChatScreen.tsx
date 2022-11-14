import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import MessageButton from "../components/MessageButton";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";

export default function ChatScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={ChatRooms}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
      <MessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: "80%",
  },
});
