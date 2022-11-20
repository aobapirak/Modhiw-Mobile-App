import * as React from "react";
import { Image, StyleSheet, View, Text, ImageBackground} from "react-native";
import { ingredientInfo, toppingInfo } from "../dummydata";
import {Checkbox} from 'react-native-paper';

class FoodInfo extends React.Component {
  state = {
    checked: false
  }

  render() { 
    const {checked} = this.state;

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
          <Text style={styles.text}>{this.props.route.params.menu.menu_name}</Text>
          <Text style={styles.text1}>{this.props.route.params.restaurant.restaurant_name}</Text>
          <Image
            style={styles.mapIcon}
            resizeMode="cover"
            source={require("../assets/map.png")}
          />
          <Image
            style={styles.xIcon}
            resizeMode="cover"
            source={require("../assets/x-1.png")}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.items}>
            {ingredientInfo[0].ingredients.map((ingredient) =>
              <View>
                <Item text={ingredient.ingredientName} price={ingredient.price}/>
              </View>
            )}
            {/* <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={()=>{this.setState({checked: !checked});}}
                /> */}
          </View>
          <Text style={styles.text25}>เนื้อ</Text>
        </View>
        <View style={styles.view1}>
          <View style={styles.items}>
            {toppingInfo[0].toppings.map((topping) =>
              <View>
                <Topping text={topping.toppingName} price={topping.price}/>
              </View>
            )}
          </View>
          <Text style={styles.text29}>เพิ่มเติม</Text>
        </View>
        <View style={styles.noteView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.noteText}>Note</Text>
          <Text style={styles.etcText}>
            เช่น เพิ่มไข่ดาว, พิเศษ, หมูสับ, หมูชิ้น, ไม่ใส่ผัก, etc.
          </Text>
        </View>
        <View style={styles.bookView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.bookQueueText}>Book Queue</Text>
        </View>
      </ImageBackground>
    );
  }
  
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
