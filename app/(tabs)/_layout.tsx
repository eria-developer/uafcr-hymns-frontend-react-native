import { Tabs } from "expo-router";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../shared/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.red,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.blue,
          paddingBottom: 5,
        },
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hymns"
        options={{
          title: "Hymns",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="playlist-add-check"
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-outline"}
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="bars"
              size={24}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
