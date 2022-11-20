import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

const AddIngredients = () => {
  return (
    <View style={styles.addIngredientsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.addIngredientText}>Add ingredient</Text>
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../../assets/image-61.png")}
      />
      <View style={styles.nameView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView1} />
        <TextInput style={styles.enterTheNameOfTheIngredie}>
          Enter the name of the ingredients
        </TextInput>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView2} />
        <TextInput style={styles.enterThePriceOfTheIngredi}>
          Enter the price of the ingredients
        </TextInput>
      </View>
      <View style={styles.addView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.signIn2}>Add ingredients</Text>
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
  addIngredientText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  image6Icon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  nameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
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
  enterTheNameOfTheIngredie: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
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
  enterThePriceOfTheIngredi: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
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
  addIngredientsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default AddIngredients;
