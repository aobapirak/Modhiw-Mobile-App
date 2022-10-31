import * as React from "react";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";

const FoodInfo = () => {
  return (
    <ImageBackground
      style={styles.foodInfoIcon}
      resizeMode="cover"
      source={require("../assets/restaurantinfo.png")}
    >
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-74.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.infoView}>
        <Text style={styles.text}>ข้าวกะเพรา</Text>
        <Text style={styles.text1}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
        <Image
          style={styles.mapIcon}
          resizeMode="cover"
          source={require("../assets/map.png")}
        />
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-1.png")}
        />
      </View>
      <View style={styles.view}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon3}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon4}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon5}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon6}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.ellipseIcon7}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.ellipseIcon8}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.text11}>
          <Text style={styles.text2}>ไก่</Text>
          <Text style={styles.text3}>หมู</Text>
          <Text style={styles.text4}>หมูตุ๋น</Text>
          <Text style={styles.text5}>หมูกรอบ</Text>
          <Text style={styles.text6}>เนื้อ</Text>
          <Text style={styles.text7}>ปลาหมึก</Text>
          <Text style={styles.text8}>กุ้ง</Text>
          <Text style={styles.text9}>ทะเล</Text>
          <Text style={styles.text10}>รวมมิตร</Text>
        </Text>
        <Text style={styles.text21}>
          <Text style={styles.text12}>35฿</Text>
          <Text style={styles.text13}>35฿</Text>
          <Text style={styles.text14}>40฿</Text>
          <Text style={styles.text15}>40฿</Text>
          <Text style={styles.text16}>40฿</Text>
          <Text style={styles.text17}>40฿</Text>
          <Text style={styles.text18}>40฿</Text>
          <Text style={styles.text19}>40฿</Text>
          <Text style={styles.text20}>45฿</Text>
        </Text>
        <Text style={styles.text24}>
          <Text style={styles.text22}>10฿</Text>
          <Text style={styles.text23}>20฿</Text>
        </Text>
        <Text style={styles.text25}>เนื้อ</Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text28}>
          <Text style={styles.text26}>ไข่ดาว</Text>
          <Text style={styles.text27}>พิเศษ</Text>
        </Text>
        <Text style={styles.text29}>เพิ่มเติม</Text>
      </View>
      <View style={styles.noteView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.noteText}>Note</Text>
        <Text style={styles.etcText}>
          เช่น เพิ่มไข่ดาว, พิเศษ, หมูสับ, หมูชิ้น, ไม่ใส่ผัก, etc.
        </Text>
      </View>
      <View style={styles.bookView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.bookQueueText}>Book Queue</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 416,
    height: 417.81,
  },
  rectangleView: {
    position: "absolute",
    top: 252,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    width: 411,
    height: 571,
  },
  text: {
    position: "absolute",
    top: 16,
    left: 0,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 50,
    left: 26,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  mapIcon: {
    position: "absolute",
    top: 52,
    left: 0,
    width: 15,
    height: 15,
  },
  xIcon: {
    position: "absolute",
    top: 0,
    left: 345,
    width: 15,
    height: 15,
  },
  infoView: {
    position: "absolute",
    top: 278,
    left: 30,
    width: 360,
    height: 69,
  },
  ellipseIcon: {
    position: "absolute",
    top: 28,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 50,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 116,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 182,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 72,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 138,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 204,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 94,
    left: 0,
    width: 15,
    height: 15,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 160,
    left: 0,
    width: 15,
    height: 15,
  },
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text3: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text4: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text5: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text6: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text7: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text8: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text9: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text10: {
    margin: 0,
  },
  text11: {
    position: "absolute",
    top: 27,
    left: 36,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text12: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text13: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text14: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text15: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text16: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text17: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text18: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text19: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text20: {
    margin: 0,
  },
  text21: {
    position: "absolute",
    top: 27,
    left: 293,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#e59e00",
    textAlign: "left",
  },
  text22: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text23: {
    margin: 0,
  },
  text24: {
    position: "absolute",
    top: 255,
    left: 293,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#e59e00",
    textAlign: "left",
  },
  text25: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  view: {
    position: "absolute",
    top: 361,
    left: 48,
    width: 320,
    height: 294,
  },
  text26: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text27: {
    margin: 0,
  },
  text28: {
    position: "absolute",
    top: 27,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text29: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  view1: {
    position: "absolute",
    top: 589,
    left: 48,
    width: 47,
    height: 66,
  },
  rectangleView1: {
    position: "absolute",
    top: 21,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    width: 325,
    height: 69,
  },
  noteText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  etcText: {
    position: "absolute",
    top: 37,
    left: 17,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  noteView: {
    position: "absolute",
    top: 667,
    left: 48,
    width: 325,
    height: 90,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffbc29",
    width: 200,
    height: 42,
  },
  bookQueueText: {
    position: "absolute",
    top: 11,
    left: 56,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bookView: {
    position: "absolute",
    top: 768,
    left: 106,
    width: 200,
    height: 42,
  },
  foodInfoIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default FoodInfo;
