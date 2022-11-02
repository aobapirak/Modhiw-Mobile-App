import * as React from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";

const Restaurant = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.restaurantInfoIcon}
      resizeMode="cover"
      source={require("../assets/restaurantinfo.png")}
    >
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.searchView}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <TextInput style={styles.searchByMenu}>Search by menu</TextInput>
      </View>
      <Text style={styles.text}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
      <Text style={styles.text1}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
      <Text style={styles.noodlesALarCarte}>noodles, a lar carte</Text>
      <Text style={styles.openNowText}>Open now</Text>
      <View style={styles.barView}>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("FoodInfo")}} >
      <View style={styles.menu1View}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.text2}>ข้าวกะเพรา</Text>
        <Text style={styles.text3}>35฿ - 65฿</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.menu2View}>
        <View style={styles.rectangleView3} />
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-121.png")}
        />
        <Text style={styles.text4}>ก๋วยเตี๋ยวต้มยำ</Text>
        <Text style={styles.text5}>35฿ - 55฿</Text>
      </View>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage")}} >
      <Image
        style={styles.x1Icon}
        resizeMode="cover"
        source={require("../assets/x-1.png")}
      />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 543,
    height: 324,
  },
  rectangleView: {
    position: "absolute",
    top: 286,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#f5f5f5",
    width: 411,
    height: 537,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#efefef",
    width: 335,
    height: 33,
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 12,
    width: 15,
    height: 15,
  },
  searchByMenu: {
    position: "absolute",
    top: 7,
    left: 40,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 439,
    left: 30,
    width: 335,
    height: 33,
  },
  text: {
    position: "absolute",
    top: 344,
    left: 30,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 344,
    left: 30,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  noodlesALarCarte: {
    position: "absolute",
    top: 373,
    left: 30,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  openNowText: {
    position: "absolute",
    top: 398,
    left: 30,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  image2Icon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  image3Icon: {
    position: "absolute",
    top: 17,
    left: 324,
    width: 25,
    height: 25,
  },
  image4Icon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  barView: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  rectangleView2: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  text2: {
    position: "absolute",
    top: 198,
    left: 19,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 217,
    left: 19,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menu1View: {
    position: "absolute",
    top: 495,
    left: 30,
    width: 194,
    height: 243,
  },
  rectangleView3: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  text4: {
    position: "absolute",
    top: 198,
    left: 18,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 217,
    left: 18,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menu2View: {
    position: "absolute",
    top: 495,
    left: 239,
    width: 194,
    height: 243,
  },
  x1Icon: {
    position: "absolute",
    top: 309,
    left: 375,
    width: 15,
    height: 15,
  },
  restaurantInfoIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default Restaurant;