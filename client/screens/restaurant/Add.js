import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import axios from "axios";


const Add = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.addView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.addText}>Add</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("AddMenu", {
            user_phonenum: route.params.user_phonenum,
            restaurant_name: route.params.restaurant_name,
          });
        }}
      >
        <View style={styles.view}>
          <View style={styles.rectangleView1} />
          <Text style={styles.menuText}>Menu</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../../assets/image-5.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("AddIngredients", {
            user_phonenum: route.params.user_phonenum,
            restaurant_name: route.params.restaurant_name,
          });
        }}
      >
        <View style={styles.view1}>
          <View style={styles.rectangleView2} />
          <Text style={styles.ingredientText}>Ingredient</Text>
          <Image
            style={styles.image5Icon1}
            resizeMode="cover"
            source={require("../../assets/image-51.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("AddToping", {
            user_phonenum: route.params.user_phonenum,
            restaurant_name: route.params.restaurant_name,
          });
        }}
      >
        <View style={styles.view2}>
          <View style={styles.rectangleView3} />
          <Text style={styles.topingText}>Toping</Text>
          <Image
            style={styles.image5Icon2}
            resizeMode="cover"
            source={require("../../assets/image-52.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../../assets/rectangle-11.png")}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("HomepageRestaurant", {
              user_phonenum: route.params.user_phonenum,
            })
          }
        >
          <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../../assets/homeIcon.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("OrderList", {
              user_phonenum: route.params.user_phonenum,
              restaurant_name: route.params.restaurant_name,
            });
          }}
        >
          <Image
            style={styles.billIcon}
            resizeMode="cover"
            source={require("../../assets/orderIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          <Image
            style={styles.signoutIcon}
            resizeMode="cover"
            source={require("../../assets/logoutIcon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 823,
  },
  barIcon: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  addText: {
    position: "absolute",
    top: 106,
    left: 50,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fdd5bf",
    width: 130,
    height: 140,
  },
  menuText: {
    position: "absolute",
    top: 103,
    left: 38,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 50,
    height: 50,
  },
  view: {
    position: "absolute",
    top: 173,
    left: 49,
    width: 130,
    height: 140,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffdbc0",
    width: 130,
    height: 140,
  },
  ingredientText: {
    position: "absolute",
    top: 103,
    left: 16,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon1: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 50,
    height: 50,
  },
  view1: {
    position: "absolute",
    top: 173,
    left: 219,
    width: 130,
    height: 140,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffebcd",
    width: 130,
    height: 140,
  },
  topingText: {
    position: "absolute",
    top: 101,
    left: 33,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon2: {
    position: "absolute",
    top: 26,
    left: 27,
    width: 75,
    height: 75,
  },
  view2: {
    position: "absolute",
    top: 345,
    left: 49,
    width: 130,
    height: 140,
  },
  addView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
  barBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  barView: {
    position: "absolute",
    top: 715,
    width: "100%",
    height: 60,
  },
  homeIcon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  billIcon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  signoutIcon: {
    position: "absolute",
    top: 17,
    left: 324,
    width: 25,
    height: 25,
  },
});

export default Add;
