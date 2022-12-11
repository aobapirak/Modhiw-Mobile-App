import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useFonts } from "expo-font";

const AddMenu = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [menu_name, setMenuName] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      if (!response.cancelled) {
        setImage(response.uri);
      }
    }
  };

  const Add = async () => {
    const formData = new FormData();
    formData.append("image", {
      name: new Date() + "_menuImage",
      uri: image,
      restaurantName: restaurant_name,
      type: "image/jpg",
    });
    try {
      const res = await axios.post("http://10.0.2.2:8080/upload", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      try {
        axios
          .post("http://10.0.2.2:8080/addMenu", {
            restaurant_name: restaurant_name,
            menu_name: menu_name,
            price: price,
            picture: res.data,
          })
          .then((response) => {
            alert("Successfully added");

            axios.post("http://10.0.2.2:8080/addToCategory", {
              menu_name: menu_name,
              category: category,
            });
          })
          .catch((err) => {
            alert("Error to add menu because this menu already exists");
          });

        navigation.navigate("Add", { restaurant_name: restaurant_name });
      } catch (err) {
        console.log("err:", err);
      }
    } catch (error) {
      console.log("++++", error.message);
      alert("Error to add menu because no picture uploaded");
    }
  };

  return (
    <View style={styles.addMenuView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.addMenuText}>Add menu</Text>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../../assets/image-5.png")}
      />

      {image == "" ? (
        <TouchableOpacity activeOpacity={0.5} onPress={openImageLibrary}>
          <View style={styles.rectangleView1} />
          <Text style={styles.dropYourImageHere}>Drop your image here</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../../assets/vector.png")}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.5} onPress={openImageLibrary}>
          <View style={styles.dropYourImageHere}>
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                top: -45,
                opacity: 0.6,
                borderRadius: 10,
              }}
            />
            <Text style={{ top: -150, color: "black" }}>
              Click here to change image
            </Text>
          </View>
        </TouchableOpacity>
      )}

      <View style={styles.nameView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <TextInput
          style={styles.enterTheNameOfTheFood}
          onChangeText={setMenuName}
          value={menu_name}
          placeholder="Enter the name of the food    "
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <TextInput
          style={styles.enterThePriceOfTheFood}
          onChangeText={setPrice}
          value={price}
          placeholder="Enter the price of the food    "
          keyboardType="numeric"
        />
      </View>
      <View style={styles.categoryView}>
        <Text style={styles.categoryText}>Category</Text>
        <View style={styles.rectangleView5} />
        <TextInput
          style={styles.enterTheCategoryOfTheFood}
          onChangeText={setCategory}
          value={category}
          placeholder="Enter the category of the food"
        />
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={Add}>
        <View style={styles.addView}>
          <View style={styles.rectangleView4} />
          <Text style={styles.signIn2}>Add menu</Text>
        </View>
      </TouchableOpacity>
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
  addMenuText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  image5Icon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 184,
    left: 103,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderStyle: "dashed",
    borderColor: "#b5b5b5",
    borderWidth: 1.5,
    width: 205,
    height: 198,
  },
  dropYourImageHere: {
    position: "absolute",
    top: 316,
    left: 100,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 211,
    height: 22,
  },
  vectorIcon: {
    position: "absolute",
    top: 240,
    left: 177,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  nameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterTheNameOfTheFood: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 12,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    top: 412,
    left: 66,
    width: 280,
    height: 55,
  },
  priceText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterThePriceOfTheFood: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 12,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  priceView: {
    position: "absolute",
    top: 484,
    left: 66,
    width: 280,
    height: 55,
  },
  categoryView: {
    position: "absolute",
    top: 556,
    left: 66,
    width: 280,
    height: 55,
  },
  categoryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  enterTheCategoryOfTheFood: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 12,
    fontFamily: "NotoSansThai-SemiBold",
    color: "#505050",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#e59e00",
    width: 280,
    height: 30,
  },
  signIn2: {
    position: "absolute",
    top: 6,
    left: 62,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "NotoSansThai-Medium",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 156.89,
    // height: 12.63,
  },
  addView: {
    position: "absolute",
    top: 654,
    left: 66,
    width: 280,
    height: 30,
  },
  addMenuView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
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

export default AddMenu;
