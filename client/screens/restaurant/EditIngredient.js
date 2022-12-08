import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const EditIngredient = () => {
  return (
    <View style={styles.editIngredientView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editIngredientText}>Edit ingredient</Text>
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../../assets/editingredienticon.png")}
      />
      <Text style={styles.ingredientHeadText}>Ingredient</Text>
      <Text style={styles.priceHeadText}>Price</Text>
      <Text style={styles.ingredientsText}>
        <Text style={styles.text}>ไก่</Text>
        <Text style={styles.text1}>หมู</Text>
        <Text style={styles.text2}>หมูตุ๋น</Text>
        <Text style={styles.text3}>หมูกรอบ</Text>
        <Text style={styles.text4}>เนื้อ</Text>
        <Text style={styles.text5}>ปลาหมึก</Text>
        <Text style={styles.text6}>กุ้ง</Text>
        <Text style={styles.text7}>ทะเล</Text>
        <Text style={styles.text8}>รวมมิตร</Text>
      </Text>
      <Text style={styles.priceText}>
        <Text style={styles.text9}>10</Text>
        <Text style={styles.text10}>10</Text>
        <Text style={styles.text11}>10</Text>
        <Text style={styles.text12}>15</Text>
        <Text style={styles.text13}>15</Text>
        <Text style={styles.text14}>10</Text>
        <Text style={styles.text15}>10</Text>
        <Text style={styles.text16}>10</Text>
        <Text style={styles.text17}>20</Text>
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
  image6Icon: {
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
    marginBlockStart: 0,
    marginBlockEnd: 0,
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
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text8: {
    margin: 0,
  },
  ingredientsText: {
    position: "absolute",
    top: 237,
    left: 49,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text10: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text12: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text13: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text14: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text15: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text16: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text17: {
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
  editIngredientView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditIngredient;
