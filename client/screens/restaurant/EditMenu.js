import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";

const Item = ({ name, price, picture, restaurant_name, navigation, user_phonenum }) => (
  <View style={styles.item}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate("EditMenuDetails", {
          user_phonenum: user_phonenum,
          restaurant_name: restaurant_name,
          menu_name: name,
          price: price,
          picture: picture
        });
      }}
    >
      <View style={styles.menuView}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{ uri: picture }}
        />
        <Text style={styles.menuName}>{name}</Text>
        <Text style={styles.menuPrice}>{price}฿</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const EditMenu = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [menu, setMenu] = useState([]);
  const [menuToShow, setMenuToShow] = useState([]);
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8080/getMenu", {
        params: {
          restaurantName: restaurant_name,
        },
      })
      .then((response) => {
        setMenu(response.data);
        setMenuToShow(response.data);
        console.log(response.data);
      });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const search = (toSearch) => {
    setMenuToShow(menu.filter((menu) => menu.menu_name.search(toSearch) != -1));
  };

  const renderItem = ({ item }) => (
    <Item
      name={item.menu_name}
      price={item.price}
      picture={item.picture}
      restaurant_name={restaurant_name}
      navigation={navigation}
      user_phonenum={route.params.user_phonenum}
    />
  );

  return (
    <View style={styles.editMenuView}>
      <View style={styles.bgView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editMenuText}>Edit menu</Text>
      <Image
        style={styles.foodIcon}
        resizeMode="cover"
        source={require("../../assets/image-5.png")}
      />

      <View style={styles.searchView}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../../assets/search.png")}
        />
        <TextInput
          style={styles.searchByMenu}
          placeholder="Search by menu     "
          onChangeText={(text) => search(text)}
        />
      </View>

      <View style={styles.allMenuView}>
        <FlatList
          data={menuToShow}
          renderItem={renderItem}
          keyExtractor={(menuToShow) => menuToShow.menu_name}
        />
      </View>
      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../../assets/rectangle-11.png")}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("HomepageRestaurant", {
              user_phonenum: route.params.user_phonenum,
            })
          }
        >
          <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../../assets/homeIcon.png")}
        />
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("OrderList", {
              user_phonenum: route.params.user_phonenum,
              restaurant_name: route.params.restaurant_name,
            });
          }}
        >
          <Image
            style={styles.billIcon}
            resizeMode="cover"
            source={require("../../assets/orderIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
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
  bgView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 823,
  },
  allMenuView: {
    top: 250,
    width: "100%",
    marginBottom: 250,
  },
  item: {
    marginBottom: 300,
    marginTop: 0,
  },
  title: {
    fontSize: 32,
  },
  barIcon: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  editMenuText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  foodIcon: {
    position: "absolute",
    top: 94,
    left: 49,
    width: 50,
    height: 50,
  },
  menuBgView: {
    position: "absolute",
    top: 58,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 194,
    height: 185,
  },
  imageStyle: {
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
    top: 200,
    left: 19,
    fontSize: 18,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  menuPrice: {
    position: "absolute",
    top: 225,
    left: 19,
    fontSize: 16,
    fontFamily: "NotoSansThai-Medium",
    color: "#00790c",
    textAlign: "left",
  },
  menuView: {
    position: "absolute",
    left: 109,
  },
  searchByMenu: {
    position: "absolute",
    top: -16,
    left: 40,
    fontSize: 16,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 200,
    left: 30,
    width: 335,
    height: 33,
  },
  rectangleView1: {
    position: "absolute",
    top: -20,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#efefef",
    width: 335,
    height: 33,
  },
  searchIcon: {
    position: "absolute",
    top: -11,
    left: 12,
    width: 15,
    height: 15,
  },
  barBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  barView: {
    position: "absolute",
    top: 715,
    width: "100%",
    height: 60,
  },
  homeIcon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
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
});

export default EditMenu;
