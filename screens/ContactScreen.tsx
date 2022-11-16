import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ActivityLoader from "../components/ActivityLoader";
import ContactListItem from "../components/ContactListItem";
import { View } from "../components/Themed";
import { listUsers } from "../src/graphql/queries";

export default function ContactScreen() {
  const [users, setUsers] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersData: any = await API.graphql(graphqlOperation(listUsers));
        setUsers(usersData.data.listUsers.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityLoader loading={loader} />
      <FlatList
        style={{ width: "100%" }}
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <ContactListItem user={item} setLoader={setLoader} />
        )}
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
