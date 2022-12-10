import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';
import { useFonts } from 'expo-font';

const Homepage = ({ navigation, route }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantToShow, setRestaurantToShow] = useState([]);
  const [restaurantCategory, setRestaurantCategory] = useState([]);
  const [typeClick,setTypeClick] = useState("All");
  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('../assets/fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-Medium': require('../assets/fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-SemiBold': require('../assets/fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Bold': require('../assets/fonts/NotoSansThai-Bold.ttf'),
  });

  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getRestaurantList")
    .then((response) => {
      setRestaurants(response.data);
      setRestaurantToShow(response.data);
    })
    
    axios.get("http://10.0.2.2:8080/getRestaurantCategory")
    .then((response) => {
      setRestaurantCategory(response.data);
    })
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const categorizeRestaurant = (categorySelected) => {
    if (categorySelected == "All"){
      setRestaurantToShow(restaurants);
    } else {
      let buff = [];
      let filteredRestaurant = restaurantCategory.filter(restaurantCategory => restaurantCategory.category == categorySelected);
      for (let i = 0; i < filteredRestaurant.length; i++){
        buff[i] = filteredRestaurant[i].restaurant_name;
      }
      setRestaurantToShow(restaurants.filter(restaurants => (buff.some(rnToShow => rnToShow == restaurants.restaurant_name)) == true));
    }
  }

  const goRestaurant = (restaurant) => {
    navigation.navigate('Restaurant', { user_phonenum: route.params.user_phonenum, restaurant: restaurant});
  }

  const search = (toSearch) => {
    setRestaurantToShow(restaurants.filter(restaurants => restaurants.restaurant_name.search(toSearch) != -1));
  }

  //console.log("category:\t",category);
  //console.log("restaurantToShow:\t"restaurantToShow);

  return (
    <View style={styles.homepageView}>
      <ScrollView>
      <View style={styles.rectangleView} />
      <Text style={styles.helloAreYouHungryYet}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.areYouHungry}> Are you hungry yet?</Text>
      </Text>
      <View style={styles.searchView}>
        <View style={styles.searchBox} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <TextInput 
          style={styles.searchByRestaurant}
          placeholder="Search by restaurant  "
          onChangeText={(text) => search(text)}
        />
      </View>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => { 
        categorizeRestaurant("All") 
        setTypeClick("All") }}>
        <View style={styles.allBox}>
          {typeClick == "All" ? <View style={[styles.allType, {backgroundColor: "#f0a500"}]} /> : <View style={styles.allType} />}
          <Text style={styles.allText}>All</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => { 
        categorizeRestaurant("À la carte") 
        setTypeClick("À la carte")}}>
        <View style={styles.aLaCarteBox}>
          {typeClick == "À la carte" ? <View style={[styles.aLaCarteType, {backgroundColor: "#f0a500"}]} /> : <View style={styles.aLaCarteType} />}
          <Text style={styles.aLaCarte}>À la carte</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => { 
        categorizeRestaurant("Noodle") 
        setTypeClick("Noodle")}}>
        <View style={styles.noodlesBox}>
          {typeClick == "Noodle" ? <View style={[styles.noodleType, {backgroundColor: "#f0a500"}]} /> : <View style={styles.noodleType} />}
          <Text style={styles.noodlesText}>Noodle</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => { 
        categorizeRestaurant("Fast Food") 
        setTypeClick("Fast Food")}}>
        <View style={styles.fastFoodBox}>
          {typeClick == "Fast Food" ? <View style={[styles.fastFoodType, {backgroundColor: "#f0a500"}]} /> : <View style={styles.fastFoodType} />}
          <Text style={styles.fastFoodText}>Fast Food</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.restaurantChoice}>
      {restaurantToShow.map((restaurant) => 
      <View>
          <View style={styles.restaurantView}> 
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {goRestaurant(restaurant)}}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={{
              uri: `${restaurant.picture}`,
            }}
          />
          <View style={styles.whitebox} />
          <Text style={styles.restaurantName}>{restaurant.restaurant_name}</Text>
          <Text style={styles.restaurantType}>{restaurant.restaurant_status}</Text>
          </TouchableOpacity>
          </View>
      </View>)}
      </View>
      </ScrollView>

      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../assets/homeIconYellow.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Ticket", { user_phonenum: route.params.user_phonenum })}}>
          <Image
            style={styles.billIcon}
            resizeMode="cover"
            source={require("../assets/ticketIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 }>
          <Image
            style={styles.signoutIcon}
            resizeMode="cover"
            source={require("../assets/logoutIcon.png")}
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
    width: 411,
  },
  helloText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  areYouHungry: {
    margin: 0,
  },
  helloAreYouHungryYet: {
    position: "absolute",
    top: 74,
    left: 38,
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#1b1a17",
    textAlign: "left",
    width: 325,
  },
  searchBox: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#efefef",
    width: 335,
    height: 33,
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 12,
    width: 15,
    height: 15,
  },
  searchByRestaurant: {
    position: "absolute",
    top: 4,
    left: 40,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 172,
    left: 38,
    width: 335,
    height: 33,
  },
  allType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    // backgroundColor: "#f0a500",
    backgroundColor: "#d8d8d8",
    width: 35,
    height: 22,
  },
  allText: {
    position: "absolute",
    top: 3,
    left: 10,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#fff",
    textAlign: "left",
    width: 16,
    height: 17.81,
  },
  allBox: {
    position: "absolute",
    top: 216,
    left: 38,
    width: 35,
    height: 22,
  },
  aLaCarteType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 79,
    height: 22,
  },
  aLaCarte: {
    position: "absolute",
    top: 3,
    left: 12,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#fff",
    textAlign: "left",
    width: 90,
    height: 17.81,
  },
  aLaCarteBox: {
    position: "absolute",
    top: 216,
    left: 83,
    width: 35,
    height: 22,
  },
  noodleType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 67,
    height: 22,
  },
  noodlesText: {
    position: "absolute",
    top: 3,
    left: 12,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#fff",
    textAlign: "left",
    width: 52.57,
    height: 17.81,
  },
  noodlesBox: {
    position: "absolute",
    top: 216,
    left: 167,
    width: 67,
    height: 22,
    marginLeft: 5
  },
  fastFoodType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 71,
    height: 22,
  },
  fastFoodText: {
    position: "absolute",
    top: 3,
    left: 9,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#fff",
    textAlign: "left",
    width: 70,
    height: 18,
  },
  fastFoodBox: {
    position: "absolute",
    top: 216,
    left: 244,
    width: 71,
    height: 22,
    marginLeft: 5
  },
  imageStyle: {
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  whitebox: {
    position: "absolute",
    top: 116,
    left: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    width: 285,
    height: 54,
  },
  restaurantName: {
    position: "absolute",
    top: 127,
    left: 23,
    fontSize: 15,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  restaurantType: {
    position: "absolute",
    top: 148,
    left: 23,
    fontSize: 10,
    fontFamily: "NotoSansThai-Regular",
    color: "#777",
    textAlign: "left"
  },
  restaurantView: {
    top: 269,
    left: 47,
    width: 285,
    height: 170,
    marginBottom: 20
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
  homepageView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff9ee",
  },
  restaurantChoice: {
    marginBottom: 330
  },
});

export default Homepage;