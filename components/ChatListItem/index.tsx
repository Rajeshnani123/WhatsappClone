import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { userData } from "../../commonFunctions/awsServices";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

type userChat = {
  id: String;
  name: String;
  imageUri: String;
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation();
  const { chatRoom } = props;
  const [otherUser, setOtherUser] = React.useState<userChat>({
    id: "",
    name: "",
    imageUri:
      "https://imgs.search.brave.com/6FUq7TUjQzLp3U5sJ3eR-a9kOA0cbmkhZ91n7XOOPHs/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/YnRaSDVuTGJRUlhW/X1A5b3hqbVV3SGFG/aiZwaWQ9QXBp",
  });
  const user = chatRoom.users.items[1].user;

  React.useEffect(() => {
    const getOtherUser = async () => {
      const userInfo = await userData();
      if (user.id === userInfo.attributes.sub) {
        setOtherUser(chatRoom.users.items[0].user);
      } else {
        setOtherUser(user);
      }
    };
    getOtherUser();
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ChatRoomScreen", {
          id: otherUser.id,
          name: otherUser.name,
          photo: otherUser.imageUri,
        })
      }
    >
      <View style={styles.leftContainer}>
        <Image source={{ uri: otherUser.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{otherUser.name}</Text>
          <Text style={styles.lastMessage}>
            {"chatRoom.lastMessage.conten"}
          </Text>
        </View>
      </View>
      {/* <Text style={styles.time}>
        {chatRoom.lastMessage.createdAt &&
          moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text> */}
    </TouchableOpacity>
  );
};

export default ChatListItem;
