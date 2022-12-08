import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { tickets } from "../dummydata";

const TicketPage = () => {
  return (
    <View style={styles.ticketPageView}>
      <ScrollView>
      {tickets.map( (ticket) =>
        <View style={styles.ticketView}>
          <Image
            style={styles.subtractIcon}
            resizeMode="cover"
            source={require("../assets/subtract.png")}
          />
            <Text style={styles.queueNumber}>{ticket.queue}</Text>
            <Text style={styles.positionView}>
              Here is your position in the queue:
            </Text>
            <Text style={styles.positionInQueue}>
              <Text style={styles.text3}>{ticket.position} position</Text>
              <Text style={styles.inQueue}> in queue</Text>
            </Text>
          <View style={styles.lineView} />
          <View style={styles.restaurantView}>
            <Text style={styles.text1}>{ticket.restaurantName}</Text>
            <Text style={styles.text2}>{ticket.location}</Text>
            <Image
              style={styles.locationIcon}
              resizeMode="cover"
              source={require("../assets/image-6.png")}
            />
          </View>
          <View style={styles.menuView}>
            <Text style={styles.text}>{ticket.food}</Text>
            <Text style={styles.note}>Note: {ticket.note}</Text>
            <Image
              style={styles.foodIcon}
              resizeMode="cover"
              source={require("../assets/image-5.png")}
            />
          </View>
        </View>
      )}
      </ScrollView>
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
    top: 282,
    left: 25,
    borderStyle: "dashed",
    borderColor: "#000",
    // borderRadius: 1,
    borderTopWidth: 2.8,
    width: 320,
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
  foodIcon: {
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
  locationIcon: {
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
  queueNumber: {
    position: "absolute",
    top: 73,
    left: 121,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  positionText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  positionView: {
    position: "absolute",
    top: 183,
    // left: 95,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text3: {
    color: "#e59e00",
  },
  text4: {
    color: "#000",
  },
  centerText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: -10,
    marginBottom: 60,
    top: 53,
    left: 21,
    width: 370,
    height: 570,
    justifyContent: 'center',
    alignItems: 'center',
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
