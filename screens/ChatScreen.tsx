import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { userData } from "../commonFunctions/awsServices";
import ChatListItem from "../components/ChatListItem";
import MessageButton from "../components/MessageButton";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";
import { getUser } from "./queries";

export default function ChatScreen({ navigation }: any) {
  const [chatRoom, setChatRoom] = React.useState([]);
  React.useEffect(() => {
    const fetchChatRooms = async () => {
      const userInfo = await userData();
      try {
        const userData = await API.graphql(
          graphqlOperation(getUser, {
            id: userInfo.attributes.sub,
          })
        );
        setChatRoom(userData.data.getUser.ChatRooms.items);
        console.log(userData.data.getUser.ChatRooms.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRoom}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
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
