import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

const EditIngredientDetails = () => {
  return (
    <View style={styles.editIngredientDetailsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit ไก่</Text>
      <Image
        style={styles.editIngredientIcon}
        resizeMode="cover"
        source={require("../../assets/editingredienticon.png")}
      />
      <View style={styles.nameInputView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView1} />
        <TextInput style={styles.enterTheNewName}>
          Enter the new name
        </TextInput>
      </View>
      <View style={styles.priceInputView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView2} />
        <TextInput style={styles.enterTheNewPrice}>
          Enter the new price
        </TextInput>
      </View>
      <View style={styles.editButtonView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.editButton}>Edit</Text>
      </View>
      <View style={styles.deleteButtonView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.deleteButton}>Delete</Text>
      </View>
      <View style={styles.availableView}>
        <Text style={styles.availableText}>Available</Text>
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
  editText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  editIngredientIcon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  nameText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 16,
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
  enterTheNewName: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  nameInputView: {
    position: "absolute",
    top: 189,
    left: 66,
    width: 280,
    height: 55,
  },
  priceText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 16,
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
  enterTheNewPrice: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  priceInputView: {
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
  editButton: {
    position: "absolute",
    top: 4,
    left: 62,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  editButtonView: {
    position: "absolute",
    top: 346,
    left: 66,
    width: 280,
    height: 30,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#b40707",
    width: 280,
    height: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 4,
    left: 62,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  deleteButtonView: {
    position: "absolute",
    top: 393,
    left: 66,
    width: 280,
    height: 30,
  },
  d546d1dce5c7f2832a396d0516cfRIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 51,
    height: 32,
  },
  availableText: {
    position: "absolute",
    top: 7,
    left: 63,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  availableView: {
    position: "absolute",
    top: 440,
    left: 66,
    width: 118,
    height: 32,
  },
  editIngredientDetailsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditIngredientDetails;
