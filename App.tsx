import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { API, Auth, graphqlOperation } from "aws-amplify";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import React, { useEffect } from "react";
import { userData } from "./commonFunctions/awsServices";
Amplify.configure(awsExports);

const randomImages = [
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg",
];

function App({ signOut, user }: any) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const randomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await userData();
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, {
            id: userInfo.attributes.sub,
          })
        );
        if (userData.data.getUser) {
          console.log("User created");
          return;
        } else {
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: randomImage(),
            status: "Hey, I am using whatsapp",
          };
          await API.graphql(
            graphqlOperation(createUser, {
              input: newUser,
            })
          );
        }
      }
    };
    fetchUser();
  }, []);
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
