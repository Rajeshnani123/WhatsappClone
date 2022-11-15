import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactListItem from "../components/ContactListItem";
import { View } from "../components/Themed";
import { listUsers } from "../src/graphql/queries";

export default function ContactScreen() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersData: any = await API.graphql(graphqlOperation(listUsers));
        setUsers(usersData.data.listUsers.items);
        console.log(usersData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        keyExtractor={(item, index) => String(index)}
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
