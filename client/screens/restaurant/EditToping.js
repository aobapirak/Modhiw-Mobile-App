import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const EditToping = ({ navigation }) => {
  return (
    <View style={styles.editTopingView}>
      <View style={styles.bgView} />
      <Text style={styles.editTopingText}>Edit toping</Text>
      <Image
        style={styles.editTopingIcon}
        resizeMode="cover"
        source={require("../../assets/edittopingicon.png")}
      />
      <Text style={styles.topingHeadText}>Toping</Text>
      <Text style={styles.priceHeadText}>Price</Text>
      <Text style={styles.topingText}>
        <Text style={styles.ingredientName}>ไข่ดาว</Text>
      </Text>
      <Text style={styles.priceText}>
        <Text style={styles.price}>10</Text>
      </Text>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("EditTopingDetails")}}>
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
  barIcon: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  editTopingText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  editTopingIcon: {
    position: "absolute",
    top: 81,
    left: 36,
    width: 75,
    height: 75,
  },
  topingHeadText: {
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
  topingText: {
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
  text5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text6: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text7: {
    margin: 0,
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
  editTopingView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditToping;
