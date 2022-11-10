import { FlatList, StyleSheet } from "react-native";
import ContactListItem from "../components/ContactListItem";
import { View } from "../components/Themed";
import Users from "../data/Users";

export default function ContactScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={Users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
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
