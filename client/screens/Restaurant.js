import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView } from "react-native";
import CardSilder from 'react-native-cards-slider';
import axios from 'axios';

const Restaurant = ({ navigation, route }) => {
  const [menu, setMenu] = useState([]);
  const [menuToShow, setMenuToShow] = useState([]);
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getMenu",{
      params: {
        restaurantName: route.params.restaurant.restaurant_name
      }
    }).then((response) => {
      setMenu(response.data);
      setMenuToShow(response.data);
      //console.log(response.data);

    })
  
    axios.get("http://10.0.2.2:8080/getCategory",{
      params: {
        restaurantName: route.params.restaurant.restaurant_name
      }
    }).then((response) => {
      let buff = "";
      for (let i = 0; i < response.data.length; i++) {
        if(i != 0){
          buff += ", "
        }
        buff += response.data[i].category;
      }
      setCategory(buff);
    });
  }, []);

  const search = (toSearch) => {
    setMenuToShow(menu.filter(menu => menu.menu_name.search(toSearch) != -1));
  }

  const goFoodInfo = (menu) => {
    navigation.navigate('FoodInfo', { user_phonenum: route.params.user_phonenum, restaurant: route.params.restaurant, menu: menu});
  }
  
  return (
    <ImageBackground
      style={styles.restaurantInfoIcon}
      resizeMode="cover"
      source={require("../assets/restaurantinfo.png")}
    >
    <Image
      style={styles.rectangleIcon}
      resizeMode="cover"
      source={{
            uri: `${route.params.restaurant.picture}`,
        }}
    />

    <View style={styles.rectangleView} />
    <View style={styles.searchView}>
      <View style={styles.rectangleView1} />
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <TextInput 
          style={styles.searchByMenu}
          placeholder="Search by menu"
          onChangeText={(text) => search(text)}
        />
    </View>
    <Text style={styles.text}>{route.params.restaurant.restaurant_name}</Text>
    <Text style={styles.noodlesALarCarte}>{category}</Text>
    <Text style={styles.openNowText}>{route.params.restaurant.restaurant_status}</Text>
    
    <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage", { user_phonenum: route.params.user_phonenum })}}>
      <Image
        style={styles.x1Icon}
        resizeMode="cover"
        source={require("../assets/x-1.png")}
      />
    </TouchableOpacity>

    <CardSilder style={{marginTop: 500}}>
      {menuToShow.map((allmenu) => 
        <View>
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {goFoodInfo(allmenu)}} >
            <View style={styles.menu1View}>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={{
                  uri: `${allmenu.picture}`,
                }}
              />
              <Text style={styles.menuName}>{allmenu.menu_name}</Text>
              <Text style={styles.menuPrice}>~ {allmenu.price} Baht</Text>
            </View>
          </TouchableOpacity>        
        </View>)
      }
    </CardSilder>
    
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
          source={require("../assets/ticketIcon.png")}
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
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 543,
    height: 324,
  },
  rectangleView: {
    position: "absolute",
    top: 286,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#f5f5f5",
    width: 411,
    height: 537,
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
  searchByMenu: {
    position: "absolute",
    top: 3,
    left: 40,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 439,
    left: 30,
    width: 335,
    height: 33,
  },
  restaurantName: {
    position: "absolute",
    top: 344,
    left: 30,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 344,
    left: 30,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  noodlesALarCarte: {
    position: "absolute",
    top: 373,
    left: 30,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  openNowText: {
    position: "absolute",
    top: 398,
    left: 30,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
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
  rectangleView2: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 150,
    height: 150,
  },
  rectangleIcon2: {
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 150,
    height: 150,
  },
  menu1View: {
    position: "absolute",
    top: 0,
    left: 30,
    width: 200,
    height: 200,
  },
  rectangleView3: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 194,
    height: 185,
  },
  menuName: {
    position: "absolute",
    top: 160,
    left: 18,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  menuPrice: {
    position: "absolute",
    top: 180,
    left: 18,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menu2View: {
    position: "absolute",
    top: 495,
    left: 239,
    width: 194,
    height: 243,
  },
  x1Icon: {
    position: "absolute",
    top: 309,
    left: 375,
    width: 15,
    height: 15,
  },
  restaurantInfoIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default Restaurant;
