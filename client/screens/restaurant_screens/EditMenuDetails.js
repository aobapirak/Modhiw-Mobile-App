import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const EditMenuDetails = () => {
  return (
    <View style={styles.editMenuDetailsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit ข้าวกะเพรา</Text>
      <Image
        style={styles.editMenuIcon}
        resizeMode="cover"
        source={require("../assets/editmenuicon.png")}
      />
      <View style={styles.dropImageHereView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.dropYourImageHere}>Drop your image here</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={styles.nameInputView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.enterTheNewName}>Enter the new name</Text>
      </View>
      <View style={styles.priceInputView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <Text style={styles.enterTheNewPrice}>Enter the new price</Text>
      </View>
      <View style={styles.editButtonView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.signIn2}>Edit</Text>
      </View>
      <View style={styles.deleteButtonView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.signIn21}>Delete</Text>
      </View>
      <View style={styles.availableView}>
        <Image
          style={styles.switchIcon}
          resizeMode="cover"
          source={require("../assets/5348d546d1dce5c7f2832a396d0516cfremovebgpreview-1.png")}
        />
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
  editMenuIcon: {
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
  enterTheNewName: {
    position: "absolute",
    top: 33,
    left: 15,
    fontSize: 12,
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
  enterTheNewPrice: {
    position: "absolute",
    top: 33,
    left: 15,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  priceInputView: {
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
    backgroundColor: "rgba(229, 158, 0, 0.87)",
    width: 280,
    height: 30,
  },
  signIn2: {
    position: "absolute",
    top: 9,
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
    height: 12.63,
  },
  editButtonView: {
    position: "absolute",
    top: 569,
    left: 66,
    width: 280,
    height: 30,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#b40707",
    width: 280,
    height: 30,
  },
  signIn21: {
    position: "absolute",
    top: 9,
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
    height: 12.63,
  },
  deleteButtonView: {
    position: "absolute",
    top: 614,
    left: 66,
    width: 280,
    height: 30,
  },
  switchIcon: {
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
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  availableView: {
    position: "absolute",
    top: 659,
    left: 66,
    width: 118,
    height: 32,
  },
  editMenuDetailsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditMenuDetails;
