import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const TicketPage = () => {
  return (
    <View style={styles.ticketPageView}>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
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
        <Text style={styles.heresYourPositionInTheQu}>
          <Text style={styles.heresYourPosition}>Here’s your position</Text>
          <Text style={styles.inTheQueue}>in the queue:</Text>
        </Text>
        <Text style={styles.positionInQueue}>
          <Text style={styles.text3}>3</Text>
          <Text style={styles.text4}>{` `}</Text>
          <Text style={styles.positionText}>position</Text>
          <Text style={styles.inQueue}>{` in queue `}</Text>
        </Text>
      </View>
      <View style={styles.ticketView1}>
        <Image
          style={styles.subtractIcon1}
          resizeMode="cover"
          source={require("../assets/subtract2.png")}
        />
        <View style={styles.lineView1} />
        <View style={styles.menuView1}>
          <Text style={styles.text5}>ข้าวกะเพรา (หมูกรอบ)</Text>
          <Text style={styles.note1}>Note: พิเศษ + ไข่ดาว</Text>
          <Image
            style={styles.image5Icon1}
            resizeMode="cover"
            source={require("../assets/image-52.png")}
          />
        </View>
        <View style={styles.restaurantView1}>
          <Text style={styles.text6}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
          <Text style={styles.text7}>ใต้หอพักนักศึกษาหญิง</Text>
          <Image
            style={styles.image6Icon1}
            resizeMode="cover"
            source={require("../assets/image-52.png")}
          />
        </View>
        <Text style={styles.a03Text}>A03</Text>
        <Text style={styles.heresYourPositionInTheQu1}>
          <Text style={styles.heresYourPosition1}>Here’s your position</Text>
          <Text style={styles.inTheQueue1}>in the queue:</Text>
        </Text>
        <Text style={styles.positionInQueue1}>
          <Text style={styles.text8}>3</Text>
          <Text style={styles.text9}>{` `}</Text>
          <Text style={styles.positionText1}>position</Text>
          <Text style={styles.inQueue1}>{` in queue `}</Text>
        </Text>
      </View>
      <View style={styles.barView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.ticket1Icon}
          resizeMode="cover"
          source={require("../assets/ticket-1.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
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
    top: 443,
    left: 53,
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
    top: 377,
    left: 53,
    width: 218,
    height: 41,
  },
  e12Text: {
    position: "absolute",
    top: 73,
    left: 121,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  heresYourPosition: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  inTheQueue: {
    margin: 0,
  },
  heresYourPositionInTheQu: {
    position: "absolute",
    top: 183,
    left: 127,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
  },
  text3: {
    color: "#e59e00",
  },
  text4: {
    color: "#000",
  },
  positionText: {
    color: "#e59e00",
  },
  inQueue: {
    color: "#000",
  },
  positionInQueue: {
    position: "absolute",
    top: 232,
    left: 121,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    textAlign: "center",
  },
  ticketView: {
    position: "absolute",
    top: 53,
    left: 21,
    width: 370,
    height: 570,
  },
  subtractIcon1: {
    position: "relative",
    width: 370,
    height: 570,
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
  text5: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  note1: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image5Icon1: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 25,
    height: 25,
  },
  menuView1: {
    position: "absolute",
    top: 443,
    left: 53,
    width: 217,
    height: 41,
  },
  text6: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  image6Icon1: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 25,
    height: 25,
  },
  restaurantView1: {
    position: "absolute",
    top: 377,
    left: 53,
    width: 218,
    height: 41,
  },
  a03Text: {
    position: "absolute",
    top: 74,
    left: 108,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  heresYourPosition1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  inTheQueue1: {
    margin: 0,
  },
  heresYourPositionInTheQu1: {
    position: "absolute",
    top: 183,
    left: 127,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
  },
  text8: {
    color: "#e59e00",
  },
  text9: {
    color: "#000",
  },
  positionText1: {
    color: "#e59e00",
  },
  inQueue1: {
    color: "#000",
  },
  positionInQueue1: {
    position: "absolute",
    top: 232,
    left: 121,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    textAlign: "center",
  },
  ticketView1: {
    position: "absolute",
    top: 643,
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
  ticket1Icon: {
    position: "absolute",
    top: 17,
    left: 193,
    width: 25,
    height: 25,
  },
  image3Icon: {
    position: "absolute",
    top: 17,
    left: 324,
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
  barView: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  ticketPageView: {
    position: "relative",
    backgroundColor: "#f3c776",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default TicketPage;
