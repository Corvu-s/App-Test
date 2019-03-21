import { createStackNavigator, createAppContainer } from "react-navigation";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const HomeScreen = <Text>Helo</Text>;
const ProfileScreen = <Text>World</Text>;
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const Disp = createAppContainer(MainNavigator);

export default Disp;
