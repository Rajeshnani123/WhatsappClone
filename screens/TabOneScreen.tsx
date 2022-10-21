import { StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";

export default function TabOneScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRooms[1]} />
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
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
