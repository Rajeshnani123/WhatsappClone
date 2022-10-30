import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MainTabNavigator from "./MainTabNavigator";
import { HeaderComponent } from "../components/HeaderComponent";
import { ChatRoomScreen } from "../screens/ChatRoom";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerColors.background,
        },
        headerTintColor: Colors.headerColors.text,
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "Whatsapp",
          headerRight: () => {
            return <HeaderComponent />;
          },
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name + "",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <TouchableOpacity>
                <FontAwesome5 name={"video"} size={22} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name={"call"} size={22} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={"dots-vertical"}
                  size={22}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
