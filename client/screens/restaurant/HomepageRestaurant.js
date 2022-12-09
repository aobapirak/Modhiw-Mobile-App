import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from "react-native";
import axios from "axios";

const HomepageRestaurant = ({ navigation, route }) => {
  const [switchOpen, setSwitchOpen] = useState(true);
  const [userRestaurant, setUserRestaurant] = useState(true);
  
  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getUserRestaurant",{
      params: {
        phonenum: route.params.user_phonenum
      }
    })
    .then((response) => {
      setUserRestaurant(response.data[0]);
    })
  }, []);

  function toggleSwitch() {
    let status = "";
    setSwitchOpen(switchOpen => !switchOpen)
    if(!switchOpen == true){
      status = "Open now"
    } else{
      status = "Closed"
    }
    axios.patch("http://10.0.2.2:8080/updateRestaurantStatus",{
      restaurant_status: status,
      restaurant_name: restaurant_name
    })
  }

  return (
    <View style={styles.homepageView}>
      <View style={styles.rectangleView} />
      <Text style={styles.helloView}>
        <Text style={styles.helloText1}>
          <Text style={styles.helloText}>{`Hello, `}</Text>
        </Text>
        <Text style={styles.restaurantView}>
          <Text style={styles.restaurantName}>{userRestaurant.restaurant_name}</Text>
        </Text>
      </Text>
      <View style={styles.openCloseView}>
        <View style={styles.openText}>
          <TouchableOpacity 
            style={[
            styles.outterSwitch, 
            switchOpen
            ? {justifyContent:'flex-end', backgroundColor: '#00790c'}
            : {justifyContent: 'flex-start', backgroundColor: '#B40707'}
            ]} 
            activeOpacity={1} 
            onPress={(toggleSwitch)}
            >
            <View
              style={[styles.innerSwitch]}
            />
          </TouchableOpacity>
          {
            switchOpen
            ? <Text style={{color: '#00790c'}}>  Open now</Text>
            : <Text style={{color: '#B40707'}}>  Closed</Text>
          }
        </View>
      </View>
      <TouchableOpacity 
        activeOpacity = { .5 }
        onPress = { () => {navigation.navigate("Add", { user_phonenum: route.params.user_phonenum, name: userRestaurant.restaurant_name})}}
      >
        <View style={styles.addView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.addText}>
            Add menu, ingredients, toping
          </Text>
          <Image
            style={styles.add1Icon}
            resizeMode="cover"
            source={require("../../assets/add-1.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        activeOpacity = { .5 }
        onPress = { () => {navigation.navigate("Edit", { user_phonenum: route.params.user_phonenum, name: userRestaurant.restaurant_name})}}
      >
        <View style={styles.editView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.editText}>
            Edit restaurant, menu, ingredients, toping
          </Text>
          <Image
            style={styles.pencilIcon}
            resizeMode="cover"
            source={require("../../assets/pencil-1.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../../assets/rectangle-11.png")}
        />
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../../assets/homeIconYellow.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("OrderList", { user_phonenum: route.params.user_phonenum})}}>
          <Image
            style={styles.billIcon}
            resizeMode="cover"
            source={require("../../assets/orderIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 }>
          <Image
            style={styles.signoutIcon}
            resizeMode="cover"
            source={require("../../assets/logoutIcon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff9ee",
    width: 411,
    height: 823,
  },
  helloText: {
    fontSize: 32,
  },
  helloText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  restaurantName: {
    fontSize: 24,
  },
  restaurantView: {
    margin: 0,
  },
  helloView: {
    position: "absolute",
    top: 110,
    left: 38,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#1b1a17",
    textAlign: "left",
    width: 354,
  },
  barBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  billIcon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  signoutIcon: {
    position: "absolute",
    top: 17,
    left: 324,
    width: 25,
    height: 25,
  },
  homeIcon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  barView: {
    position: "absolute",
    top: 715,
    width: "100%",
    height: 60,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#314E52",
    width: 335,
    height: 150,
  },
  addText: {
    position: "absolute",
    top: 116,
    left: 20,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  add1Icon: {
    position: "absolute",
    top: 6,
    left: 273,
    width: 55,
    height: 55,
  },
  addView: {
    position: "absolute",
    top: 242,
    left: 39,
    width: 335,
    height: 150,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#4C8492",
    width: 335,
    height: 150,
  },
  editText: {
    position: "absolute",
    top: 116,
    left: 20,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  pencilIcon: {
    position: "absolute",
    top: 8,
    left: 281,
    width: 45,
    height: 45,
  },
  editView: {
    position: "absolute",
    top: 410,
    left: 37,
    width: 335,
    height: 150,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  rectangleView3: {
    position: "absolute",
    top: 116,
    left: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    width: 285,
    height: 54,
  },
  text2: {
    position: "absolute",
    top: 127,
    left: 23,
    fontSize: 15,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  noodlesALarCarte: {
    position: "absolute",
    top: 145,
    left: 23,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  switchIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 23,
    height: 13,
  },
  openText: {
    position: "absolute",
    flexDirection:'row', 
    flexWrap:'wrap',
    top: 0,
    left: 38,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    textAlign: "left",
  },
  openCloseView: {
    position: "absolute",
    top: 202,
    width: 200,
    height: 14,
  },
  homepageView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
  innerSwitch: {
    width: 17,
    height: 17,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  outterSwitch: {
    width: 40,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
});

export default HomepageRestaurant;
