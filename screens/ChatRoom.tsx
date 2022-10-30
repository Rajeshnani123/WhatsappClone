import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { ChatMessageScreen } from "../components/ChatMessage";
import Chats from "../data/Chats";

export const ChatRoomScreen = () => {
  const navigation = useNavigation();
  const Route = useRoute();

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={{
        uri: "https://imgs.search.brave.com/CuulvOuH2Vp_ZXi8O3x9elo-deFEbMHJ6I2sLrYh_GA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY5ODkx/MjIuanBn",
      }}
    >
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <ChatMessageScreen message={item} />}
        inverted
      />
    </ImageBackground>
  );
};
