import { DefaultTheme, NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SheetProvider } from "react-native-actions-sheet";

import "./components/sheets";
import "react-native-reanimated";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Fonts from "@/constants/Fonts";

import { injectStore } from "@/store/injector";
import { persistor, store } from "@/store";

import HomeStack from "./route/HomeStack";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <ThemeProvider value={DefaultTheme}>
          <SheetProvider>
            <NavigationContainer>      
              <HomeStack />
            </NavigationContainer>
          </SheetProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
