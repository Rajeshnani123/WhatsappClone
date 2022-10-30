import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import styles from "./styles";

export type ChatMessageProps = {
  message: Message;
};

export const ChatMessageScreen = (props: ChatMessageProps) => {
  const { message } = props;

  const MessageSentBy = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: MessageSentBy() ? "#DCF8C5" : "white",
            marginLeft: MessageSentBy() ? 50 : 0,
            marginRight: MessageSentBy() ? 0 : 50,
          },
        ]}
      >
        {!MessageSentBy() && (
          <Text style={styles.name}>{message.user.name}</Text>
        )}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};
