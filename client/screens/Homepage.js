import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { restaurants } from "../dummydata";

const Homepage = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.homepageView}>
      <View style={styles.rectangleView} />
      <Text style={styles.helloAreYouHungryYet}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.areYouHungry}> Are you hungry yet?</Text>
      </Text>
      <View style={styles.searchView}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <TextInput style={styles.searchByRestaurant}>Search by restaurant</TextInput>
      </View>
      <View style={styles.groupView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.allText}>All</Text>
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView3} />
        <Text style={styles.aLaCarte}>A la carte</Text>
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView4} />
        <Text style={styles.noodlesText}>Noodles</Text>
      </View>
      <View style={styles.groupView3}>
        <View style={styles.rectangleView5} />
        <Text style={styles.fastFoodText}>Fast food</Text>
      </View>
      
      {restaurants.map((restaurant) => 
      <View>
        <CardSilder>
          <View style={styles.s1View}> 
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Restaurant",{restaurant: "testest"})}}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={restaurant.image}
            />
            <View style={styles.rectangleView6} />
            <Text style={styles.text}>{restaurant.name}</Text>
            <Text style={styles.aLarCarte}>{restaurant.type}</Text>
            {/* {restaurant.type.map((foodType) => 
            <Text style={styles.aLarCarte}> {foodType}</Text>
            )} */}    
          </TouchableOpacity>
          </View>
        </CardSilder>
      
      </View>)}

      {/* <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Restaurant")}}>
      <View style={styles.s2View}>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <View style={styles.rectangleView7} />
        <Text style={styles.text1}>ร้านก๋วยเตี๋ยวลุงหนวด</Text>
        <Text style={styles.noodlesALarCarte}>noodles, a lar carte</Text>
      </View>
      </TouchableOpacity> */}
      {/* <View style={styles.s3View}>
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-73.png")}
        />
        <View style={styles.rectangleView8} />
        <Text style={styles.text2}>ร้านชิกกี้ ชิก</Text>
        <Text style={styles.aLarCarteFastFood}>a lar carte, fast food</Text>
      </View> */}
      <View style={styles.barView}>
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.home21}
          resizeMode="cover"
          source={require("../assets/home-2-1.png")}
        />
      </View>
    </View>
    </ScrollView>
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
    fontFamily: "SF Pro Rounded",
    color: "#1b1a17",
    textAlign: "left",
    width: 325,
  },
  rectangleView1: {
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
    top: 7,
    left: 40,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
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
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#f0a500",
    width: 35,
    height: 22,
  },
  allText: {
    position: "absolute",
    top: 3,
    left: 9,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 16,
    height: 17.81,
  },
  groupView: {
    position: "absolute",
    top: 216,
    left: 38,
    width: 35,
    height: 22,
  },
  rectangleView3: {
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
    left: 9,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 90,
    height: 17.81,
  },
  groupView1: {
    position: "absolute",
    top: 216,
    left: 83,
    width: 74,
    height: 22,
  },
  rectangleView4: {
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
    left: 8,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 52.57,
    height: 17.81,
  },
  groupView2: {
    position: "absolute",
    top: 216,
    left: 167,
    width: 67,
    height: 22,
    marginLeft: 5
  },
  rectangleView5: {
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
    left: 7,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 70,
    height: 18,
  },
  groupView3: {
    position: "absolute",
    top: 216,
    left: 244,
    width: 71,
    height: 22,
    marginLeft: 5
  },
  rectangleIcon: {
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  rectangleView6: {
    top: 116,
    left: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    width: 285,
    height: 54,
  },
  text: {
    position: "absolute",
    top: 127,
    left: 23,
    fontSize: 15,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  aLarCarte: {
    position: "absolute",
    top: 145,
    left: 23,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left"
  },
  s1View: {
    top: 269,
    left: 47,
    width: 285,
    height: 170,
    marginBottom: 15
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  rectangleView7: {
    position: "absolute",
    top: 116,
    left: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    width: 285,
    height: 54,
  },
  text1: {
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
  s2View: {
    position: "absolute",
    top: 464,
    left: 47,
    width: 285,
    height: 170,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  rectangleView8: {
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
  aLarCarteFastFood: {
    position: "absolute",
    top: 145,
    left: 23,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  s3View: {
    position: "absolute",
    top: 659,
    left: 47,
    width: 285,
    height: 170,
  },
  rectangleIcon3: {
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
  home21: {
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
  homepageView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default Homepage;
