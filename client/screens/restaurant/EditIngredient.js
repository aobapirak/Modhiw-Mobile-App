import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const EditIngredient = ({ navigation }) => {
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
      <Text style={styles.ingredientsText}>
        <Text style={styles.ingredientName}>ไก่</Text>
      </Text>
      <Text style={styles.priceText}>
        <Text style={styles.price}>10</Text>
      </Text>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("EditIngredientDetails")}}>
        <View style={styles.editButtonView}>
          <View style={styles.editButton} />
          <Text style={styles.editButtonText}>EDIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  priceHeadText: {
    position: "absolute",
    top: 182,
    left: 219,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  ingredientName: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ingredientsText: {
    position: "absolute",
    top: 237,
    left: 49,
    fontSize: 22,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  price: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  priceText: {
    position: "absolute",
    top: 237,
    left: 222,
    fontSize: 22,
    fontFamily: "SF Pro Rounded",
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
    left: "50%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
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
