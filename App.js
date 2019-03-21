import React from "react";
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation"; // Version can be specified in package.json
const styles = StyleSheet.create({
  disp: {
    padding: 30
  }
});

class HomeScreen extends React.Component {
  state = {
    text: " "
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: 50, height: 100, backgroundColor: "powderblue" }}>
          <Text>Home Screen</Text>
          <TextInput
            style={{ alignItems: "center" }}
            onChangeText={text => this.setState({ text })}
            placeholder="input"
          />
        </View>

        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Details" })]
              })
            );
          }}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Image
          style={styles.disp}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />
        <Button
          title="Go to Home Screen"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Home" })]
              })
            );
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
