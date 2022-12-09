import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const EditMenu = ({ navigation }) => {
  return (
    <View style={styles.editMenuView}>
      <View style={styles.bgView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editMenuText}>Edit menu</Text>
      <Image
        style={styles.foodIcon}
        resizeMode="cover"
        source={require("../../assets/image-5.png")}
      />
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("EditMenuDetails")}}>
        <View style={styles.menuView}>
          <View style={styles.menuBgView} />
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={require("../../assets/rectangle-12.png")}
          />
          <Text style={styles.menuName}>ข้าวกะเพรา</Text>
          <Text style={styles.menuPrice}>35฿</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bgView: {
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
  editMenuText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  foodIcon: {
    position: "absolute",
    top: 94,
    left: 49,
    width: 50,
    height: 50,
  },
  menuBgView: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  imageStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  menuName: {
    position: "absolute",
    top: 200,
    left: 19,
    fontSize: 18,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  menuPrice: {
    position: "absolute",
    top: 225,
    left: 19,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menuView: {
    position: "absolute",
    top: 242,
    left: 109,
    width: 194,
    height: 243,
  },
});

export default EditMenu;
