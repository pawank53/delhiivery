import { Stack } from "expo-router";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext"
import { Provider } from "react-redux";
import { store } from "../redux/store/store"
import { CourierProvider } from "../context/CourierContext"
import { BackArrowContextProvider } from "../context/BackArrowContext"
import React from "react";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <CourierProvider>
          <BackArrowContextProvider>
            <PaperProvider>
              <AppNavigator />
            </PaperProvider>
          </BackArrowContextProvider>
        </CourierProvider>
      </AuthProvider>
    </Provider>

  );
}

const AppNavigator = () => {

  const { isLoggedIn } = useContext(AuthContext);
  console.info("Checking login status:", isLoggedIn);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="index" />
      ) : (
        <Stack.Screen name="Dashboard" />
      )}

    </Stack>
  )
}