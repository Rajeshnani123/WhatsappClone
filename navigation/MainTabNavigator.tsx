import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { useColorScheme, Pressable } from "react-native";
import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { HomeScreenParamList } from "../types";

const BottomTab = createMaterialTopTabNavigator<HomeScreenParamList>();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme() || "light";
  return (
    <BottomTab.Navigator
      initialRouteName="CHATS"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors.headerColors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        tabBarShowIcon: true,
      }}
    >
      <BottomTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: () => <Fontisto name="camera" color="white" size={20} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen name="CHATS" component={TabOneScreen} />
      <BottomTab.Screen name="STATUS" component={TabTwoScreen} />
      <BottomTab.Screen name="CALLS" component={TabTwoScreen} />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator;
