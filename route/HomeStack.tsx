import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "@/screens/Categories";
import AddCategoryScreen from "@/screens/AddCategory";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
