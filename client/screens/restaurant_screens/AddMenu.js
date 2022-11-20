import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

const AddMenu = () => {
  return (
    <View style={styles.addMenuView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../assets/bar.png")}
      />
      <Text style={styles.addMenuText}>Add menu</Text>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={styles.rectangleView1} />
      <Text style={styles.dropYourImageHere}>Drop your image here</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.nameView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <TextInput style={styles.enterTheNameOfTheFood}>
          Enter the name of the food
        </TextInput>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <TextInput style={styles.enterThePriceOfTheFood}>
          Enter the price of the food
        </TextInput>
      </View>
      <View style={styles.addView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.signIn2}>Add menu</Text>
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
  addMenuText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 184,
    left: 103,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderStyle: "dashed",
    borderColor: "#b5b5b5",
    borderWidth: 1.5,
    width: 205,
    height: 198,
  },
  dropYourImageHere: {
    position: "absolute",
    top: 316,
    left: 100,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 211,
    height: 22,
  },
  vectorIcon: {
    position: "absolute",
    height: "7.17%",
    width: "14.36%",
    top: "30.01%",
    right: "43.07%",
    bottom: "62.82%",
    left: "42.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  rectangleView2: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterTheNameOfTheFood: {
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
    top: 412,
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
  rectangleView3: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterThePriceOfTheFood: {
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
    top: 484,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView4: {
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
    top: 569,
    left: 66,
    width: 280,
    height: 30,
  },
  addMenuView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default AddMenu;
