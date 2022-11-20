<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
=======
>>>>>>> 62c364dd4817a4e82bc83b0873386e9a7559980b
const Stack = createNativeStackNavigator();

import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";
import LogIn from "./screens/LogIn";
<<<<<<< HEAD
=======
import Verification from './screens/Verification';
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
import Restaurant from "./screens/Restaurant";
import FoodInfo from "./screens/FoodInfo";
import BookedQueue from "./screens/BookedQueue";
import Ticket from "./screens/Ticket";

import HomepageRestaurant from "./screens/HomepageRestaurant";
import Add from "./screens/Add";
<<<<<<< HEAD
=======
import AddMenu from "./screens/AddMenu";
import AddIngredients from "./screens/AddIngredients";
import AddToping from "./screens/AddToping";
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
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
<<<<<<< HEAD
<<<<<<< HEAD
            {/* <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
=======
            <Stack.Screen
=======
            {/* <Stack.Screen
>>>>>>> 62c364dd4817a4e82bc83b0873386e9a7559980b
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
              />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
<<<<<<< HEAD
            />
            {/* <Stack.Screen
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
=======
            />*/}
            <Stack.Screen
>>>>>>> 62c364dd4817a4e82bc83b0873386e9a7559980b
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
            {/* <Stack.Screen
              name="BookedQueue"
              component={BookedQueue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ticket"
              component={Ticket}
              options={{ headerShown: false }}
<<<<<<< HEAD
            /> */}
=======
            />
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
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
<<<<<<< HEAD
=======
            <Stack.Screen
              name="AddMenu"
              component={AddMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddIngredients"
              component={AddIngredients}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToping"
              component={AddToping}
              options={{ headerShown: false }}
            /> */}
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
            /> */}
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Restaurant"
              component={Restaurant}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="FoodInfo"
              component={FoodInfo}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="BookedQueue"
              component={BookedQueue}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Ticket"
              component={Ticket}
              options={{ headerShown: false }}
            /> */}
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
>>>>>>> 415576c3cf31cc3f6358be1413f217e06186046d
>>>>>>> 4b80099954fb20cdfd9f0f550095468931bc6723
=======
>>>>>>> 62c364dd4817a4e82bc83b0873386e9a7559980b
