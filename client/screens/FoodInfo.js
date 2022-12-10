import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, FlatList, Modal, Pressable } from "react-native";
import axios from 'axios';
import { useFonts } from 'expo-font';
import CallModal from "./ModalBook";


const Ingredient = ({ name, price, selectIngredient, nowSelect }) => (
  <TouchableOpacity activeOpacity = { .5 } onPress = { () => {selectIngredient(name)}} >
  <View style={styles.item}>
      <View style={styles.itemLeft}>
        {name == nowSelect? <View style={[styles.bullet, {backgroundColor:"#f0a500", opacity: 1}]}/>
        :
        <View style={styles.bullet}/>
        }
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <Text style={styles.price}>{price}฿</Text>
  </View>
  </TouchableOpacity>
);

const Toping = ({ name, price , selectToping}) => (
  <TouchableOpacity activeOpacity = { .5 } onPress = { () => {selectToping(name)}} >
  <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <Text style={styles.price}>{price}฿</Text>
  </View>
  </TouchableOpacity>
);


const FoodInfo = ({ navigation, route }) => {

  const [ingredient, setIngredient] = useState([]);
  const [toping, setToping] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState([]);
  const [topingSelected, setTopingSelected] = useState([]);
  const [note, setNote] = useState("");
  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('../assets/fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-Medium': require('../assets/fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-SemiBold': require('../assets/fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Bold': require('../assets/fonts/NotoSansThai-Bold.ttf'),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([]);
  const user_phonenum = route.params.user_phonenum;
  const restaurant = route.params.restaurant;
  const menu = route.params.menu;

  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getIngredient", {
      params: {
        restaurant_name: route.params.restaurant.restaurant_name
      }
    })
    .then((response) => {
      setIngredient(response.data);
    });

    axios.get("http://10.0.2.2:8080/getToping", {
      params: {
        restaurant_name: route.params.restaurant.restaurant_name
      }
    })
    .then((response) => {
      setToping(response.data);
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const selectIngredient = (newIngredient) => {
    setIngredientSelected(newIngredient);
  }

  const deSelectToping = (index) => {
    var buff = [];
    var j = 0;

    for (let i = 0; i < topingSelected.length; i++){
      if (i != index) {
        buff[j] = topingSelected[i];
        j++;
      }
    }
    
    setTopingSelected(buff);
  }

  const selectToping = (newToping) => {
    var buff = topingSelected;
    var selected = 0
    console.log("new", newToping);

    for (let i = 0; i < topingSelected.length; i++) {
      if (buff[i] == newToping) {
        deSelectToping(i);
        selected = 1;
        break;
      }
    }

    if (selected == 0){
      buff[topingSelected.length] = newToping;
      setTopingSelected(buff);
    }
  }
  //console.log("topingSelected:\t",topingSelected)
  //console.log("ingredientSelected:\t", ingredientSelected)
  //console.log("note:\t", note)

  const renderItem = ({ item }) => (
    <Ingredient 
    name={item.ingredient} 
    price={item.price_adjust} 
    selectIngredient={selectIngredient}
    nowSelect={ingredientSelected}
    />
  );

  const renderExtra = ({ item }) => (
    <Toping 
    name={item.toping} 
    price={item.price_adjust} 
    selectToping = {selectToping}
    />
  );

/*
  const goConfirmBook = (ingredient) => {
    navigation.navigate('ConfirmBook', {restaurant: route.params.restaurant, menu: route.params.menu, ingredient: ingredient, toping: "toping :D", booknote: "booknote :)"});
  }
*/


  const pressHandle = (ingredient,booknote,toping) => {
    setModalVisible(true)
    setData({
      menu: route.params.menu.menu_name, 
      ingredient: ingredient,
      booknote: booknote,
      toping: toping
    })
  }

  return (
    <ImageBackground
      style={styles.foodInfoIcon}
      resizeMode="cover"
      source={require("../assets/restaurantinfo.png")}
    >
  
    <CallModal 
        modalVisible={modalVisible} 
        setModalVisible={()=> setModalVisible(!modalVisible)} 
        data={data}
        navigation={navigation}
        user_phonenum={user_phonenum}
        restaurant={restaurant}
        menu={menu}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={{
          uri: `${route.params.menu.picture}`,
        }}
      />
      <View style={styles.rectangleView} />
      <View style={styles.infoView}>
        <Text style={styles.menuName}>{route.params.menu.menu_name}</Text>
        <Text style={styles.restaurantName}>{route.params.restaurant.restaurant_name}</Text>
        <Image
          style={styles.mapIcon}
          resizeMode="cover"
          source={require("../assets/map.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Restaurant", { user_phonenum: route.params.user_phonenum, restaurant: route.params.restaurant })}}>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-1.png")}
        />
        </TouchableOpacity>
      </View>
      <Text style={styles.ingredient}>เนื้อ</Text>
      <View style={styles.view}>
      <FlatList
        data={ingredient}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      <Text style={styles.toping}>เพิ่มเติม</Text>
      <View style={styles.view1}>
      <FlatList
        data={toping}
        renderItem={renderExtra}
        keyExtractor={item => item.id}
      />
      </View>
      <View style={styles.noteView}>
        <Text style={styles.noteText}>Note</Text>
        <View style={styles.rectangleView1}>
        <TextInput 
          style={styles.etcText}
          placeholder='เช่น เพิ่มไข่ดาว, พิเศษ, หมูสับ, หมูชิ้น, ไม่ใส่ผัก, etc.'
          onChangeText={() => {setNote([...note])}}
          value={note}
        />
        </View>
        <TextInput>
        </TextInput>
      </View>
      {/* goBookedQueue(ingredientSelected, topingSelected, note) */}
      {/* pressHandle(ingredientSelected, note, topingSelected) */}
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {pressHandle(ingredientSelected, note, topingSelected)}} >
        <View style={styles.bookView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.bookQueueText}>Book Queue</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 416,
    height: 417.81,
  },
  items: {
    marginTop: 25,
  },
  rectangleView: {
    position: "absolute",
    top: 202,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    width: 411,
    height: 621,
  },
  menuName: {
    position: "absolute",
    top: 16,
    left: 0,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  restaurantName: {
    position: "absolute",
    top: 50,
    left: 26,
    fontSize: 16,
    fontFamily: "NotoSansThai-Medium",
    color: "#505050",
    textAlign: "left",
  },
  mapIcon: {
    position: "absolute",
    top: 52,
    left: 0,
    width: 15,
    height: 15,
  },
  xIcon: {
    position: "absolute",
    top: 0,
    left: 345,
    width: 15,
    height: 15,
  },
  infoView: {
    position: "absolute",
    top: 228,
    left: 30,
    width: 360,
    height: 69,
  },
  item: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "left",
  },
  view: {
    position: "absolute",
    top: 331,
    left: 48,
    width: 320,
    height: 204
  },
  ingredient: {
    position: "absolute",
    top: 311,
    left: 48,
    width: 320,
    height: 294,
    fontSize: 14,
    fontFamily: "NotoSansThai-Bold",
    color: "#000",
    textAlign: "left",
  },
  toping: {
    position: "absolute",
    top: 540,
    left: 48,
    width: 320,
    height: 294,
    fontSize: 14,
    fontFamily: "NotoSansThai-Bold",
    color: "#000",
    textAlign: "left",
  },
  text29: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "left",
  },
  view1: {
    position: "absolute",
    top: 563,
    left: 48,
    width: 320,
    height: 50
  },
  rectangleView1: {
    position: "absolute",
    top: 21,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    width: 325,
    height: 69,
  },
  noteText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  etcText: {
    position: "absolute",
    top: 5,
    left: 17,
    fontSize: 12,
    fontFamily: "NotoSansThai-Regular",
    color: "#777",
    textAlign: "left",
  },
  noteView: {
    position: "absolute",
    top: 617,
    left: 48,
    width: 325,
    height: 90,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffbc29",
    width: 200,
    height: 42,
  },
  bookQueueText: {
    position: "absolute",
    top: 11,
    left: 52,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#fff",
    textAlign: "left",
  },
  bookView: {
    position: "absolute",
    top: 718,
    left: 106,
    width: 200,
    height: 42,
  },
  foodInfoIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
  item: {
    backgroundColor: '#FFF',
    paddingLeft: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  bullet: {
    width: 11,
    height: 11,
    backgroundColor: '#000',
    opacity: 0.3,
    borderRadius: 7,
    marginRight: 10,
  },
  itemText: {
    maxWidth: '100%',
  },
  price: {
    width: 100,
    height: 20,
    color: "#e59e00",
    textAlign: "right"
  },
  
});

export default FoodInfo;
