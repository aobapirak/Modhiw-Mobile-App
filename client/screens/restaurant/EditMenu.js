import React, {useEffect,useState} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";


const Item = ({ name, price, picture, restaurant_name, navigation}) => (
  <View style={styles.item}>
  <TouchableOpacity activeOpacity = { .5 } 
  onPress = { () => {
    navigation.navigate("EditMenuDetails", { menu_name: name,price: price,picture: picture,restaurant_name: restaurant_name })
  }}>
        <View style={styles.menuView}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={{uri:picture}}
          />
          <Text style={styles.menuName}>{name}</Text>
          <Text style={styles.menuPrice}>{price}฿</Text>
        </View>
    </TouchableOpacity>

  </View>
);

const EditMenu = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [menu,setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getMenu",{
      params: {
        restaurantName: restaurant_name
      }
    }).then((response) => {
      setMenu(response.data);
      console.log(response.data);
    })
  }, []);

  const renderItem = ({ item }) => (
    <Item 
    name={item.menu_name} 
    price={item.price} 
    picture={item.picture} 
    restaurant_name={restaurant_name}
    navigation= {navigation}
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

      <View style={styles.allMenuView}>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    top: 180,
    width: "100%",
    marginBottom: 150
  },
  item: {
    marginBottom: 300,
    marginTop: 0
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
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  menuPrice: {
    position: "absolute",
    top: 225,
    left: 19,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  menuView: {
    position: "absolute",
    left: 109,
  },
});

export default EditMenu;
