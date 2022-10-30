import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export const ChatRoomScreen = () => {
  const navigation = useNavigation();
  const Route = useRoute();

  return (
    <View>
      <Text>Welcome to Chat Room Screen</Text>
    </View>
  );
};
