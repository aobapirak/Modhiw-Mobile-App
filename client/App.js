const Stack = createNativeStackNavigator();
import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantInfo from "./screens/RestaurantInfo";
import Homepage from "./screens/Homepage";
import LogIn from "./screens/LogIn";
import FoodInfo from "./screens/FoodInfo";

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
            <Stack.Screen
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
              name="RestaurantInfo"
              component={RestaurantInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FoodInfo"
              component={FoodInfo}
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
