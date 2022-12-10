import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { useFonts } from 'expo-font';

const TicketPage = ({ navigation, route }) => {
  const phoneNumber = route.params.user_phonenum;
  const [tickets, settickets] = useState([]);
  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('../assets/fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-Medium': require('../assets/fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-SemiBold': require('../assets/fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Bold': require('../assets/fonts/NotoSansThai-Bold.ttf'),
  });

  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getQueue",{
      params: {
        phoneNumber: phoneNumber
      }
    })
    .then((response) => {
      settickets(response.data);
      console.log(response.data);
    })
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.ticketPageView}>
    <View style={styles.barAndContent}>
      <ScrollView>
      {tickets.map( (ticket) =>
        <View style={styles.ticketView}>
          <Image
            style={styles.subtractIcon}
            resizeMode="cover"
            source={require("../assets/subtract.png")}
          />
            <Text style={styles.queueNumber}>E{ticket.queue_id}</Text>
            <Text style={styles.positionView}>
              Here is your position{"\n"} in the queue:
            </Text>
            {ticket.order_status == 0 ?
              <Text style={styles.positionInQueue}>
                <Text style={styles.text3}>{ticket.queue_wait} position</Text>
                <Text style={styles.inQueue}> in queue</Text>
              </Text>
            :
              <Text style={styles.positionTakeOrder}>
                <Text style={{color: '#00790c', fontSize: 14}}>It's your turn now{"\n"}</Text>
                <Text style={{color: '#ce0808', fontSize: 14}}>Please take your order within 15 mins</Text>
              </Text>
            }
            
          <View style={styles.lineView} />
          <View style={styles.restaurantView}>
            <Text style={styles.text1}>{ticket.restaurant_name}</Text>
            <Text style={styles.text2}>{ticket.area}</Text>
            <Image
              style={styles.locationIcon}
              resizeMode="cover"
              source={require("../assets/image-6.png")}
            />
          </View>
          <View style={styles.menuView}>
            <Text style={styles.menuName}>{ticket.menu_name} ({ticket.ingredient}) {"\n"}
            <Text style={styles.note}>Note: {ticket.note}</Text></Text>
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
      <View style={styles.barView}>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Ticket", { user_phonenum: route.params.user_phonenum })}}>
          <Image
            style={styles.image2Icon}
            resizeMode="cover"
            source={require("../assets/ticketIconYellow.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/logoutIcon.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage", { user_phonenum: route.params.user_phonenum })}}>
          <Image
            style={styles.image4Icon}
            resizeMode="cover"
            source={require("../assets/homeIcon.png")}
          />
        </TouchableOpacity>
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
    top: 282,
    left: 25,
    borderStyle: "dashed",
    borderColor: "#000",
    // borderRadius: 1,
    borderTopWidth: 2.8,
    width: 320,
    height: 1,
  },
  menuName: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  ingredient: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  note: {
    position: "absolute",
    top: 40,
    left: 45,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
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
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 24,
    left: 45,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
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
    fontFamily: "NotoSansThai-SemiBold",
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
    left: 115,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
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
    left: 112,
    fontSize: 16,
    fontFamily: "NotoSansThai-Medium",
    textAlign: "center",
  },
  positionTakeOrder: {
    position: "absolute",
    top: 230,
    left: 65,
    fontSize: 16,
    fontFamily: "NotoSansThai-Regular",
    textAlign: "center",
  },
  ticketView: {
    marginTop: -10,
    marginBottom: 60,
    top: 50,
    left: 22,
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
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  image2Icon: {
    position: "absolute",
    top: 17,
    left: 199,
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
    top: 715,
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
  barAndContent: {
    marginBottom: 59
  }
});

export default TicketPage;
