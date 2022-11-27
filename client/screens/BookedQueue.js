import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { booking } from "../dummydata";
import axios from 'axios';

const Booked = ({ navigation, route }) => {

  const [listToping, setlistToping] = useState([]);

  useEffect(() => {

    let buff = "";
    for (let i = 0; i < route.params.toping.length; i++) {
      buff += route.params.toping[i].toping;
        buff += ", ";
    }
    buff += "note: " + route.params.booknote;

    axios.post("http://10.0.2.2:8080/BookQueue",{
      restaurant_name: route.params.restaurant.restaurant_name,
      phone_number: "0951236987",
      menu_name: route.params.menu.menu_name,
      ingredient: route.params.ingredient.ingredient,
      note: buff
    })
    
    setlistToping(buff);
  }, []);

  //console.log(listToping);

  return (
    <View style={styles.bookedView}>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />

        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage")}} >
          <View style={styles.bookView}>
            <View style={styles.rectangleView} />
            <Text style={styles.doneText}>Done</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.text}>{route.params.menu.menu_name}</Text>
          <Text style={styles.note}>{route.params.ingredient.ingredient}</Text>
          <Text style={styles.note}>{listToping}</Text>
          <Text style={styles.note}>{route.params.booknote}</Text>
          <Image
            style={styles.foodIcon}
            resizeMode="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <View style={styles.restaurantView}>
          <Text style={styles.text1}>{route.params.restaurant.restaurant_name}</Text>
          <Text style={styles.text2}>{route.params.restaurant.area}</Text>
          <Image
            style={styles.locationIcon}
            resizeMode="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        <Text style={styles.queue}>{booking.queue}</Text>
        <Text style={styles.word}>
          <Text style={styles.received}>
            The restaurant has received your queue!
          </Text>
          <Text style={styles.pleaseWait}>
            {"\n"}Please wait :D
          </Text>
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
    top: 282,
    left: 20,
    borderStyle: "dashed",
    borderColor: "#000",
    // borderRadius: 1,
    borderTopWidth: 3.2,
    width: 328,
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
  locationIcon: {
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
  queue: {
    position: "absolute",
    top: 84,
    left: 120,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  received: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pleaseWait: {
    margin: 0,
  },
  word: {
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
    top: 53,
    left: 21,
    width: 370,
    height: 570,
    justifyContent: 'center',
    alignItems: 'center',
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
