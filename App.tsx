import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Auth } from "aws-amplify";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import React from "react";
Amplify.configure(awsExports);

function App({ signOut, user }: any) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
