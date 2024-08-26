import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SheetProvider } from "react-native-actions-sheet";

import "./sheets";
import "react-native-reanimated";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Fonts from "@/constants/Fonts";

import { injectStore } from "@/store/injector";
import { persistor, store } from "@/store";

injectStore(store);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts(Fonts);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SheetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="dark" />
          <ThemeProvider value={DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="Categories" />
              <Stack.Screen name="AddCategory" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SheetProvider>
  );
}
