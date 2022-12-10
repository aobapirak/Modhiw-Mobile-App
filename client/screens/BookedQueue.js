import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { booking } from "../dummydata";
import axios from 'axios';
import { useFonts } from 'expo-font';

const Booked = ({ navigation, route }) => {
  const [listToping, setlistToping] = useState([]);
  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('../assets/fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-Medium': require('../assets/fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-SemiBold': require('../assets/fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Bold': require('../assets/fonts/NotoSansThai-Bold.ttf'),
  });

  useEffect(() => {


    axios.get("http://10.0.2.2:8080/getLastQueue")
    .then((response) => {
      setLastQueue(response.data);
    })
    let buff = "";
    for (let i = 0; i < route.params.toping.length; i++) {
      if (i > 0) {
        buff += ", ";
      }
      buff += route.params.toping[i];
    }


    axios.post("http://10.0.2.2:8080/BookQueue",{
      restaurant_name: route.params.restaurant.restaurant_name,
      phone_number: route.params.user_phonenum,
      menu_name: route.params.menu.menu_name,
      ingredient: route.params.ingredient.ingredient,
      note: buff,
      lastQueue: route.params.lastQueue[0].queue_id
    })
    
    setlistToping(buff);
  }, []);

  console.log("listToping:\t", listToping);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.bookedView}>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />

        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage", { user_phonenum: route.params.user_phonenum })}}>
          <View style={styles.bookView}>
            <View style={styles.rectangleView} />
            <Text style={styles.doneText}>Done</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.menuName}>{route.params.menu.menu_name}</Text>
          <Text style={styles.ingredient}>Ingredient: {route.params.ingredient} </Text>
          <Text style={styles.note}>Note: {listToping} {route.params.booknote}</Text>
          <Image
            style={styles.foodIcon}
            resizeMode="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <View style={styles.restaurantView}>
          <Text style={styles.restaurantName}>{route.params.restaurant.restaurant_name}</Text>
          <Text style={styles.restaurantArea}>{route.params.restaurant.area}</Text>
          <Image
            style={styles.locationIcon}
            resizeMode="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
        {route.params.lastQueue[0] == undefined?
        <Text style={styles.queue}>E</Text>
        :
        <Text style={styles.queue}>E{route.params.lastQueue[0].queue_id + 1}</Text>
        }
        
        <Text style={styles.word}>
          <Text style={styles.received}>
            The restaurant has received your queue!
          </Text>
          <Text style={styles.pleaseWait}>
            {"\n"}Please wait :D
          </Text>
        </Text>
        <View style={styles.bookView}>
          <TouchableOpacity onPress = { () => {navigation.navigate("Ticket", { user_phonenum: route.params.user_phonenum })}}>
            <View style={styles.doneButton} />
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
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
  doneButton: {
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "#E59E00",
    width: 200,
    height: 35,
  },
  doneText: {
    position: "absolute",
    top: 7,
    left: 78,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
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
    top: 282,
    left: 20,
    borderStyle: "dashed",
    borderColor: "#000",
    // borderRadius: 1,
    borderTopWidth: 3.2,
    width: 328,
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
    top: 407,
    left: 45,
    width: 217,
    height: 41,
  },
  restaurantName: {
    position: "absolute",
    top: 0,
    left: 45,
    fontSize: 20,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  restaurantArea: {
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
    top: 341,
    left: 45,
    width: 218,
    height: 41,
  },
  queue: {
    position: "absolute",
    top: 84,
    left: 115,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
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
    left: 50,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
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
