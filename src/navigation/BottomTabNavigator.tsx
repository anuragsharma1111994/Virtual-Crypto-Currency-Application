import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList, HomeScreenParamList, MarketScreenParamList,LeaderScreenParamList,ProfileScreenParamList } from '../../types';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/Home Screen/Index";
import MarketScreen from "../screens/Market Screen";
import LeaderScreen from "../screens/Leader Screen/Index";
import ProfileScreen from "../screens/Profile Screen/Index";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors[colorScheme].tint,
        style: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={{

          tabBarIcon: ({ color }) => (
            <Entypo name="wallet" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="pie-chart" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="LeaderBoard"
        component={LeaderScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="leaderboard" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={21} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown:false}}
      />
    </HomeScreenStack.Navigator>
  );
}

const MarketScreenStack = createStackNavigator<MarketScreenParamList>();

function MarketScreenNavigator() {
  return (
    <MarketScreenStack.Navigator>
      <MarketScreenStack.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{ headerShown:false }}
      />
    </MarketScreenStack.Navigator>
  );
}

const LeaderScreenStack = createStackNavigator<LeaderScreenParamList>();

function LeaderScreenNavigator() {
  return (
    <LeaderScreenStack.Navigator>
      <LeaderScreenStack.Screen
        name="LeaderScreen"
        component={LeaderScreen}
        options={{ headerShown:false }}
      />
    </LeaderScreenStack.Navigator>
  );
}
const ProfileScreenStack = createStackNavigator<ProfileScreenParamList>();

function ProfileScreenNavigator() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown:false }}
      />
    </ProfileScreenStack.Navigator>
  );
}
