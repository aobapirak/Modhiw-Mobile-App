import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Booked = () => {
  return (
    <View style={styles.bookedView}>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
        <View style={styles.bookView}>
          <View style={styles.rectangleView} />
          <Text style={styles.doneText}>Done</Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.text}>ข้าวกะเพรา (หมูกรอบ)</Text>
          <Text style={styles.note}>Note: พิเศษ + ไข่ดาว</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <View style={styles.restaurantView}>
          <Text style={styles.text1}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
          <Text style={styles.text2}>ใต้หอพักนักศึกษาหญิง</Text>
          <Image
            style={styles.image6Icon}
            resizeMode="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <Text style={styles.e12Text}>E12</Text>
        <Text style={styles.theRestaurantHasReceivedYo}>
          <Text style={styles.theRestaurantHas}>
            The restaurant has received your queue!
          </Text>
          <Text style={styles.pleaseWaitKrub}>Please wait krub :)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtractIcon: {
    position: "relative",
    width: 370,
    height: 570,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffbc29",
    width: 280,
    height: 35,
  },
  doneText: {
    position: "absolute",
    top: 8,
    left: 121,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bookView: {
    position: "absolute",
    top: 510,
    left: 45,
    width: 280,
    height: 35,
  },
  lineView: {
    position: "absolute",
    top: 284.5,
    left: 14.5,
    borderStyle: "dashed",
    borderColor: "#000",
    borderRadius: 0.001,
    borderTopWidth: 1,
    width: 341,
    height: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  note: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 25,
    height: 25,
  },
  menuView: {
    position: "absolute",
    top: 427,
    left: 45,
    width: 217,
    height: 41,
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image6Icon: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 25,
    height: 25,
  },
  restaurantView: {
    position: "absolute",
    top: 361,
    left: 45,
    width: 218,
    height: 41,
  },
  e12Text: {
    position: "absolute",
    top: 84,
    left: 120,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  theRestaurantHas: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pleaseWaitKrub: {
    margin: 0,
  },
  theRestaurantHasReceivedYo: {
    position: "absolute",
    top: 204,
    left: 68,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
  },
  ticketView: {
    position: "absolute",
    top: 51,
    left: 21,
    width: 370,
    height: 570,
  },
  bookedView: {
    position: "relative",
    backgroundColor: "#f3c776",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default Booked;
