import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const EditToping = () => {
  return (
    <View style={styles.editTopingView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editTopingText}>Edit toping</Text>
      <Image
        style={styles.editTopingIcon}
        resizeMode="cover"
        source={require("../../assets/edittopingicon.png")}
      />
      <Text style={styles.topingHeadText}>Toping</Text>
      <Text style={styles.priceHeadText}>Price</Text>
      <Text style={styles.topingText}>
        <Text style={styles.text}>ไข่ดาว</Text>
        <Text style={styles.text1}>ไข่เจียว</Text>
        <Text style={styles.text2}>ไข่ข้น</Text>
        <Text style={styles.text3}>พิเศษ</Text>
      </Text>
      <Text style={styles.priceText}>
        <Text style={styles.text4}>10</Text>
        <Text style={styles.text5}>10</Text>
        <Text style={styles.text6}>20</Text>
        <Text style={styles.text7}>20</Text>
      </Text>
      <View style={styles.editButtonView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.eDITText}>EDIT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
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
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text3: {
    margin: 0,
  },
  topingText: {
    position: "absolute",
    top: 237,
    left: 49,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text4: {
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
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#eebe16",
    width: 60,
    height: 20,
  },
  eDITText: {
    position: "absolute",
    marginTop: -7,
    marginLeft: -13,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 25,
    height: 13,
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
