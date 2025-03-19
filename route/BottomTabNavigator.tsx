import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For icons

import PreferenceScreen from '@/screens/PreferenceScreen';
import PlannerScreen from '@/screens/PlannerScreen';

import { Colors } from '@/constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Planner') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Preference') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary, // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      })}
    >
      <Tab.Screen name="Planner" component={PlannerScreen} />
      <Tab.Screen name="Preference" component={PreferenceScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;