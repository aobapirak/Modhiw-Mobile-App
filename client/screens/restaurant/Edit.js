import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

const Edit = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('../../assets/fonts/NotoSansThai-Regular.ttf'),
    'NotoSansThai-Medium': require('../../assets/fonts/NotoSansThai-Medium.ttf'),
    'NotoSansThai-SemiBold': require('../../assets/fonts/NotoSansThai-SemiBold.ttf'),
    'NotoSansThai-Bold': require('../../assets/fonts/NotoSansThai-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.editView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit</Text>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate('EditMenu', { user_phonenum: route.params.user_phonenum, restaurant_name: route.params.restaurant_name })}}>
        <View style={styles.editMenuView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.menuText}>Menu</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../../assets/image-5.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate('EditIngredient', { user_phonenum: route.params.user_phonenum, restaurant_name: route.params.restaurant_name })}}>
        <View style={styles.editIngredientView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.ingredientText}>Ingredient</Text>
          <Image
            style={styles.image5Icon1}
            resizeMode="cover"
            source={require("../../assets/editingredienticon.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate('EditToping', { user_phonenum: route.params.user_phonenum, restaurant_name: route.params.restaurant_name })}}>
        <View style={styles.editTopingView}>
          <View style={styles.rectangleView3} />
          <Text style={styles.topingText}>Toping</Text>
          <Image
            style={styles.image5Icon2}
            resizeMode="cover"
            source={require("../../assets/edittopingicon.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate('EditRestaurant', { user_phonenum: route.params.user_phonenum, restaurant_name: route.params.restaurant_name })}}>
        <View style={styles.editRestaurantView}>
          <View style={styles.rectangleView4} />
          <Text style={styles.restaurantText}>Restaurant</Text>
          <Image
            style={styles.image5Icon3}
            resizeMode="cover"
            source={require("../../assets/editmenuicon.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 823,
  },
  barIcon: {
    position: "absolute",
    top: 763,
    left: 0,
    width: 411,
    height: 60,
  },
  editText: {
    position: "absolute",
    top: 106,
    left: 50,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fdd5bf",
    width: 130,
    height: 140,
  },
  menuText: {
    position: "absolute",
    top: 103,
    left: 38,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 50,
    height: 50,
  },
  editMenuView: {
    position: "absolute",
    top: 173,
    left: 49,
    width: 130,
    height: 140,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffdbc0",
    width: 130,
    height: 140,
  },
  ingredientText: {
    position: "absolute",
    top: 103,
    left: 15,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon1: {
    position: "absolute",
    top: 40,
    left: 40,
    width: 50,
    height: 50,
  },
  editIngredientView: {
    position: "absolute",
    top: 173,
    left: 219,
    width: 130,
    height: 140,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffebcd",
    width: 130,
    height: 140,
  },
  topingText: {
    position: "absolute",
    top: 103,
    left: 34,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon2: {
    position: "absolute",
    top: 26,
    left: 27,
    width: 75,
    height: 75,
  },
  editTopingView: {
    position: "absolute",
    top: 345,
    left: 49,
    width: 130,
    height: 140,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff1cd",
    width: 130,
    height: 140,
  },
  restaurantText: {
    position: "absolute",
    top: 103,
    left: 14,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Medium",
    color: "#1b1a17",
    textAlign: "left",
  },
  image5Icon3: {
    position: "absolute",
    top: 37,
    left: 40,
    width: 50,
    height: 50,
  },
  editRestaurantView: {
    position: "absolute",
    top: 346,
    left: 219,
    width: 130,
    height: 140,
  },
  editView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default Edit;
