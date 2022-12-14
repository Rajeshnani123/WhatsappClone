/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  OTPScreen: { user: string };
  SignUp: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  ChatRoomScreen: { id: String; name: String; photo: String };
  NotFound: undefined;
  ContactScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeScreenParamList = {
  CHATS: undefined;
  STATUS: undefined;
  Camera: undefined;
  CALLS: undefined;
};

export type user = {
  id: string;
  name: string;
  imageUri: string;
  status: string;
};

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: user;
};

export type ChatRoom = {
  id: string;
  users: user[];
  lastMessage: Message;
};
