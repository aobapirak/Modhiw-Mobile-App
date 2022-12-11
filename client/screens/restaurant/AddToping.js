import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";

const AddToping = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Add = () => {
    axios
      .post("http://10.0.2.2:8080/addToping", {
        restaurant_name: restaurant_name,
        name: name,
        price: price,
      })
      .then((response) => {
        alert("Successfully added");
      })
      .catch((err) => {
        alert("Error to add topping because this topping already exists");
      });
    navigation.navigate("Add", { restaurant_name: restaurant_name });
  };

  return (
    <View style={styles.addTopingView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.addTopingText}>Add toping</Text>
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../../assets/image-52.png")}
      />
      <View style={styles.nameView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView1} />
        <TextInput
          style={styles.enterTheNameOfTheToping}
          onChangeText={setName}
          value={name}
          placeholder="Enter the name of the toping    "
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView2} />
        <TextInput
          style={styles.enterThePriceOfTheToping}
          onChangeText={setPrice}
          value={price}
          placeholder="Enter the price of the toping    "
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Add();
        }}
      >
        <View style={styles.addView}>
          <View style={styles.rectangleView3} />
          <Text style={styles.signIn2}>Add toping</Text>
        </View>
      </TouchableOpacity>
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
  addTopingText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  image6Icon: {
    position: "absolute",
    top: 81,
    left: 37,
    width: 75,
    height: 75,
  },
  nameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterTheNameOfTheToping: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 12,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    top: 189,
    left: 66,
    width: 280,
    height: 55,
  },
  priceText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterThePriceOfTheToping: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 12,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  priceView: {
    position: "absolute",
    top: 261,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#e59e00",
    width: 280,
    height: 30,
  },
  signIn2: {
    position: "absolute",
    top: 6,
    left: 62,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "NotoSansThai-Medium",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 156.89,
    // height: 12.63,
  },
  addView: {
    position: "absolute",
    top: 346,
    left: 66,
    width: 280,
    height: 30,
  },
  addTopingView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default AddToping;
