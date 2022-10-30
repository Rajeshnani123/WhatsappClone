import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";

export default function TabOneScreen({ navigation }: any) {
  return (
    <FlatList
      data={ChatRooms}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ChatListItem chatRoom={item} />}
    />
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
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
