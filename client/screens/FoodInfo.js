import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput} from "react-native";
import { ingredientInfo, toppingInfo } from "../dummydata";
import {Checkbox} from 'react-native-paper';
import axios from 'axios';

const FoodInfo = ({ navigation, route }) => {

  const [ingredient, setIngredient] = useState([]);
  const [toping, setToping] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState([]);
  const [topingSelected, setTopingSelected] = useState([]);
  const [note, setNote] = useState("");

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

  //console.log(topingSelected)
  //console.log(ingredientSelected)
  //console.log(note)

  const Item = (props) => {
    
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.bullet}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    )
  }

  const Topping = (props) => {
    
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    )
  }
/*
  const goConfirmBook = (ingredient) => {
    navigation.navigate('ConfirmBook', {restaurant: route.params.restaurant, menu: route.params.menu, ingredient: ingredient, toping: "toping :D", booknote: "booknote :)"});
  }
*/
  const goBookedQueue = (ingredient, toping, note) => {
    navigation.navigate('BookedQueue', { 
      user_phonenum: route.params.user_phonenum,
      restaurant: route.params.restaurant, 
      menu: route.params.menu, 
      ingredient: ingredient, 
      toping: toping, 
      booknote: note
    });
  }

  return (
    <ImageBackground
      style={styles.foodInfoIcon}
      resizeMode="cover"
      source={require("../assets/restaurantinfo.png")}
    >
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-74.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.infoView}>
        <Text style={styles.text}>{route.params.menu.menu_name}</Text>
        <Text style={styles.text1}>{route.params.restaurant.restaurant_name}</Text>
        <Image
          style={styles.mapIcon}
          resizeMode="cover"
          source={require("../assets/map.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage", { user_phonenum: route.params.user_phonenum })}}>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-1.png")}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <View style={styles.items}>
          {ingredient.map((ingredient) =>
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {selectIngredient(ingredient)}} >
              <View>
                <Item text={ingredient.ingredient} price={ingredient.price_adjust}/>
              </View>
          </TouchableOpacity>
          )}
        </View>
        <Text style={styles.text25}>{Item}</Text>
      </View>
      <View style={styles.view1}>
        <View style={styles.items}>
          {toping.map((topping) =>
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {selectToping(topping)}} >
            <View>
              <Topping text={topping.toping} price={topping.price_adjust}/>
            </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.noteView}>
        <Text style={styles.noteText}>Note</Text>
        <View style={styles.rectangleView1}>
        <TextInput 
          style={styles.etcText}
          placeholder='เช่น เพิ่มไข่ดาว, พิเศษ, หมูสับ, หมูชิ้น, ไม่ใส่ผัก, etc.'
          onChangeText={(text) => setNote(text)}
        />
        </View>
        <TextInput>
        </TextInput>
      </View>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {goBookedQueue(ingredientSelected, topingSelected, note)}} >
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
  text: {
    position: "absolute",
    top: 16,
    left: 0,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 50,
    left: 26,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
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
  text25: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  view: {
    position: "absolute",
    top: 311,
    left: 48,
    width: 320,
    height: 294,
  },
  text29: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  view1: {
    position: "absolute",
    top: 539,
    left: 48,
    width: 320,
    height: 294,
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
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  etcText: {
    position: "absolute",
    top: 37,
    left: 17,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
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
    left: 56,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
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
    width: 30,
    height: 20,
    color: "#e59e00",
  },
});

export default FoodInfo;
