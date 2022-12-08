const Stack = createNativeStackNavigator();

import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

// Login Side
import LogIn from "./screens/LogIn";
import Verification from './screens/Verification';

// Normal Side
import Homepage from "./screens/Homepage";
import Restaurant from "./screens/Restaurant";
import FoodInfo from "./screens/FoodInfo";
import ConfirmBook from "./screens/ConfirmBookIcon";
import BookedQueue from "./screens/BookedQueue";
import Ticket from "./screens/Ticket";

// Restaurant Side
import HomepageRestaurant from "./screens/restaurant/HomepageRestaurant";
import Add from "./screens/restaurant/Add";
import AddMenu from "./screens/restaurant/AddMenu";
import AddIngredients from "./screens/restaurant/AddIngredients";
import AddToping from "./screens/restaurant/AddToping";
import OrderList from "./screens/restaurant/OrderList";


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
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
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
              name="ConfirmBook"
              component={ConfirmBook}
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
            
            {/* Restaurant Page */}
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
            /> 
            <Stack.Screen
              name="OrderList"
              component={OrderList}
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