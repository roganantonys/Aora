import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
