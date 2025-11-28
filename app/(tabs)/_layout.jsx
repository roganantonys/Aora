import CustomBottomBar from "@/components/CustomBottomBar";
import { Tabs } from "expo-router";
// import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

import React from "react";
import { Image, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const TabLayout = () => {
  const TabScreen = (screenName, tabTitle, activeIcon, inactiveIcon) => {
    return (
      <Tabs.Screen
        name={screenName}
        options={{
          title: tabTitle,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? activeIcon : inactiveIcon}
              resizeMode="contain"
              style={{ width: scale(20), height: verticalScale(20) }}
              tintColor={focused ? "#FFA001" : "#CDCDE0"}
            />
          ),
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarLabelStyle: {
            fontSize: scale(12),
            fontWeight: "600",
            fontFamily: "Poppins-SemiBold",
          },
        }}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: "#161622",
          // elevation: 10,
          // borderTopColor: "#232533",
        },
      }}
      tabBar={(props) => <CustomBottomBar {...props} />}
    >
      {/* {TabScreen("Home", "Home", icons.home_active, icons.home)}
      {TabScreen("CreateVideo", "Create", icons.plus, icons.plus)}
      {TabScreen("Profile", "Profile", icons.profile, icons.profile)}
      {TabScreen("Bookmark", "Saved", icons.bookmark, icons.bookmark)} */}
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
