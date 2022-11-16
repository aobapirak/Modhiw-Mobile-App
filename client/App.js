const Stack = createNativeStackNavigator();

import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";
import LogIn from "./screens/LogIn";
import Restaurant from "./screens/Restaurant";
import FoodInfo from "./screens/FoodInfo";
import BookedQueue from "./screens/BookedQueue";
import Ticket from "./screens/Ticket";

import HomepageRestaurant from "./screens/HomepageRestaurant";
import Add from "./screens/Add";
import OrderList from "./screens/OrderList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;
  
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurant"
              component={Restaurant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodInfo"
              component={FoodInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookedQueue"
              component={BookedQueue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ticket"
              component={Ticket}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="HomepageRestaurant"
              component={HomepageRestaurant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
};
export default App;
