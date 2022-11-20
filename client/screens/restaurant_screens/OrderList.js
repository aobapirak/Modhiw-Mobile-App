import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const OrderList = () => {
  return (
    <View style={styles.orderListView}>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../../assets/subtract.png")}
        />
        <View style={styles.bookView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Text style={styles.approveText}>Approve</Text>
          <Text style={styles.rejectText}>Reject</Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.text}>ข้าวกะเพรา (หมูกรอบ)</Text>
          <Text style={styles.note}>Note: พิเศษ + ไข่ดาว</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../../assets/image-53.png")}
          />
        </View>
        <Text style={styles.e12Text}>E12</Text>
        <Text style={styles.phoneNumber0815873097Tim}>
          <Text style={styles.phoneNumber081}>Phone number: 081 587 3097</Text>
          <Text style={styles.time03Oct2022}>{"\n"}Time : 03-Oct-2022 14:35</Text>
        </Text>
      </View>
      <View style={styles.barView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../../assets/rectangle-11.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../../assets/image-3.png")}
        />
        <Image
          style={styles.home21}
          resizeMode="cover"
          source={require("../../assets/home-2-1.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../../assets/image-4.png")}
        />
        <Image
          style={styles.receipt1Icon}
          resizeMode="cover"
          source={require("../../assets/receipt-1.png")}
        />
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
    backgroundColor: "#00790c",
    width: 100,
    height: 35,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 127,
    borderRadius: 10,
    backgroundColor: "#ce0808",
    width: 100,
    height: 35,
  },
  approveText: {
    position: "absolute",
    top: 8,
    left: 20,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  rejectText: {
    position: "absolute",
    top: 8,
    left: 154,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bookView: {
    position: "absolute",
    top: 510,
    left: 78,
    width: 227,
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
    left: 46,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  note: {
    position: "absolute",
    top: 38,
    left: 46,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  menuView: {
    position: "absolute",
    top: 347,
    left: 50,
    width: 252,
    height: 55,
  },
  e12Text: {
    position: "absolute",
    top: 75,
    left: 50,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  phoneNumber081: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  time03Oct2022: {
    margin: 0,
  },
  phoneNumber0815873097Tim: {
    position: "absolute",
    top: 181,
    left: 50,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  ticketView: {
    position: "absolute",
    top: 51,
    left: 21,
    width: 370,
    height: 570,
  },
  subtractIcon1: {
    position: "relative",
    width: 370,
    height: 570,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#00790c",
    width: 100,
    height: 35,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 127,
    borderRadius: 10,
    backgroundColor: "#ce0808",
    width: 100,
    height: 35,
  },
  approveText1: {
    position: "absolute",
    top: 8,
    left: 20,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  rejectText1: {
    position: "absolute",
    top: 8,
    left: 154,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bookView1: {
    position: "absolute",
    top: 510,
    left: 78,
    width: 227,
    height: 35,
  },
  lineView1: {
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
  text1: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  note1: {
    position: "absolute",
    top: 38,
    left: 46,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image5Icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  menuView1: {
    position: "absolute",
    top: 347,
    left: 50,
    width: 252,
    height: 55,
  },
  e13Text: {
    position: "absolute",
    top: 75,
    left: 50,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  phoneNumber0811: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  time03Oct20221: {
    margin: 0,
  },
  phoneNumber0815873097Tim1: {
    position: "absolute",
    top: 181,
    left: 50,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  ticketView1: {
    position: "absolute",
    top: 651,
    left: 21,
    width: 370,
    height: 570,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  image3Icon: {
    position: "absolute",
    top: 17,
    left: 324,
    width: 25,
    height: 25,
  },
  home21: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  image4Icon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  receipt1Icon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  barView: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  orderListView: {
    position: "relative",
    backgroundColor: "#f3c776",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default OrderList;
