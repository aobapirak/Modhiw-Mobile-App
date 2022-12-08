import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const EditMenu = () => {
  return (
    <View style={styles.editMenuView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editMenuText}>Edit menu</Text>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../../assets/image-5.png")}
      />
      <View style={styles.menu1View}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.text}>ข้าวกะเพรา</Text>
        <Text style={styles.text1}>35฿</Text>
      </View>
      <View style={styles.menu2View}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-121.png")}
        />
        <Text style={styles.text2}>ก๋วยเตี๋ยวต้มยำ</Text>
        <Text style={styles.text3}>35฿</Text>
      </View>
      <View style={styles.searchView}>
        <View style={styles.rectangleView3} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <Text style={styles.searchText}>Search</Text>
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
  image5Icon: {
    position: "absolute",
    top: 94,
    left: 49,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  text: {
    position: "absolute",
    top: 198,
    left: 19,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 217,
    left: 19,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menu1View: {
    position: "absolute",
    top: 242,
    left: 109,
    width: 194,
    height: 243,
  },
  rectangleView2: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  text2: {
    position: "absolute",
    top: 198,
    left: 18,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 217,
    left: 18,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menu2View: {
    position: "absolute",
    top: 501,
    left: 109,
    width: 194,
    height: 243,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#efefef",
    width: 335,
    height: 33,
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 12,
    width: 15,
    height: 15,
  },
  searchText: {
    position: "absolute",
    top: 7,
    left: 40,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 190,
    left: 49,
    width: 335,
    height: 33,
  },
  editMenuView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditMenu;
