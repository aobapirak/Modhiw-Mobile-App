import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

const EditRestaurant = () => {
  return (
    <View style={styles.editRestaurantView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editRestaurantText}>Edit restaurant</Text>
      <Image
        style={styles.editRestaurantIcon}
        resizeMode="cover"
        source={require("../../assets/editmenuicon.png")}
      />
      <View style={styles.dropImageHereView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.dropYourImageHere}>Drop your image here</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../assets/vector.png")}
        />
      </View>
      <View style={styles.nameInputView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <TextInput style={styles.enterTheNewName}>
          Enter the new name
        </TextInput>
      </View>
      <View style={styles.categoryInputView}>
        <Text style={styles.categoryText}>Category</Text>
        <View style={styles.rectangleView3} />
        <TextInput style={styles.enterTheNewCategory}>
          Enter the new category
        </TextInput>
      </View>
      <View style={styles.areaInputView}>
        <Text style={styles.areaText}>Area</Text>
        <View style={styles.rectangleView4} />
        <TextInput style={styles.enterTheNewArea}>
          Enter the new area
        </TextInput>
      </View>
      <View style={styles.addButtonView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.editButton}>Edit</Text>
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
  editRestaurantText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  editRestaurantIcon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 3,
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
    top: 132,
    left: 0,
    fontSize: 16,
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
    height: "29.8%",
    width: "27.96%",
    top: "31.82%",
    right: "36.49%",
    bottom: "38.38%",
    left: "35.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dropImageHereView: {
    position: "absolute",
    top: 184,
    left: 100,
    width: 211,
    height: 198,
  },
  nameText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 18,
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
    top: 412,
    left: 66,
    width: 280,
    height: 55,
  },
  categoryText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 18,
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
  enterTheNewCategory: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  categoryInputView: {
    position: "absolute",
    top: 484,
    left: 66,
    width: 280,
    height: 55,
  },
  areaText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 18,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterTheNewArea: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  areaInputView: {
    position: "absolute",
    top: 556,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "rgba(229, 158, 0, 0.87)",
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
    width: 156,
  },
  addButtonView: {
    position: "absolute",
    top: 641,
    left: 66,
    width: 280,
    height: 30,
  },
  editRestaurantView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditRestaurant;
