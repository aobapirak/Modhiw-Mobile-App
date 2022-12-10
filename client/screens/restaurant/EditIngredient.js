import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";

const EditIngredient = ({ navigation, route }) => {
  const [ingredient, setIngredient] = useState([]);
  const restaurant_name = route.params.restaurant_name;
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8080/getIngredient", {
        params: {
          restaurant_name: restaurant_name,
        },
      })
      .then((response) => {
        setIngredient(response.data);
        console.log(response.data);
      });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.editIngredientView}>
      <View style={styles.bgView} />
      <Text style={styles.editIngredientText}>Edit ingredient</Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../../assets/editingredienticon.png")}
      />
      <Text style={styles.ingredientHeadText}>Ingredient</Text>
      <Text style={styles.priceHeadText}>Price</Text>
      {ingredient.map((item) => (
        <View style={styles.item}>
          <Text style={styles.ingredientsText}>
            <Text style={styles.ingredientName}>{item.ingredient}</Text>
          </Text>
          <Text style={styles.priceText}>
            <Text style={styles.price}>฿{item.price_adjust}</Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("EditIngredientDetails", {
                name: item.ingredient,
                price: item.price_adjust,
                restaurant_name: restaurant_name,
              });
            }}
          >
            <View style={styles.editButtonView}>
              <View style={styles.editButton} />
              <Text style={styles.editButtonText}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 32,
  },
  bgView: {
    position: "absolute",
    top: -6,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 823,
  },
  editIngredientText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  icon: {
    position: "absolute",
    top: 94,
    left: 49,
    width: 50,
    height: 50,
  },
  ingredientHeadText: {
    position: "absolute",
    top: 182,
    left: 49,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  priceHeadText: {
    position: "absolute",
    top: 182,
    left: 219,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  ingredientName: {
    position: "absolute",
    top: 237,
    left: 49,
    fontSize: 22,
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "left",
  },
  ingredientsText: {
    position: "absolute",
    top: 237,
    left: 49,
    fontSize: 22,
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "left",
  },
  price: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    color: "#00790C",
  },
  priceText: {
    position: "absolute",
    top: 237,
    left: 222,
    fontSize: 22,
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "center",
  },
  editButton: {
    position: "absolute",
    top: 0,
    left: 5,
    borderRadius: 3,
    backgroundColor: "#eebe16",
    width: 65,
    height: 25,
  },
  editButtonText: {
    position: "absolute",
    marginTop: -6,
    marginLeft: -6,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontFamily: "NotoSansThai-Medium",
    color: "#fff",
    textAlign: "center",
  },
  editButtonView: {
    position: "absolute",
    top: 242,
    left: 307,
    width: 60,
    height: 20,
  },
  editIngredientView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditIngredient;
