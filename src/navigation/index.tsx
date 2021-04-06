import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import CoinExchangeScreen from "../screens/Coin Detail Screen/Index";
import ExchangeScreen from "../screens/Exchange Screen/Index";
import NotFoundScreen from "../screens/NotFoundScreen";
import WelcomeScreen from "../screens/Welcome Screens/Index";
import Signin from "../screens/Welcome Screens/SignIn";
import { RootStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Signin" component={Signin} />
             <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="CoinExchangeScreen" component={CoinExchangeScreen} />
      <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />
      
    
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }} 
      />
    </Stack.Navigator>
  );
}
