import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";

const EditRestaurant = ({ navigation, route }) => {
  const restaurant_name = route.params.restaurant_name;
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [image, setImage] = useState("");
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8080/getRestaurant", {
        params: {
          restaurant_name: restaurant_name,
        },
      })
      .then((response) => {
        setRestaurant(response.data[0]);
        setName(response.data[0].restaurant_name);
        setArea(response.data[0].area);
        setImage(response.data[0].picture);
      });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const update = async () => {
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
          .patch("http://10.0.2.2:8080/updateRestaurantInfo", {
            restaurant_name: restaurant_name,
            area: area,
            picture: res.data,
          })
          .then((response) => {
            alert("Successfully update");
          })
          .catch((err) => {
            alert("Error to edit data");
          });
        navigation.navigate("Edit", { name: restaurant_name });
      } catch (err) {
        console.log("err:", err);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

  return (
    <View style={styles.editRestaurantView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editRestaurantText}>Edit {restaurant_name}</Text>
      <Image
        style={styles.editRestaurantIcon}
        resizeMode="cover"
        source={require("../../assets/editmenuicon.png")}
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

      <View style={styles.areaInputView}>
        <Text style={styles.areaText}>Area</Text>
        <View style={styles.rectangleView4} />
        <TextInput
          style={styles.enterTheNewArea}
          onChangeText={setArea}
          value={area}
          placeholder="Enter the new area"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          update();
        }}
      >
        <View style={styles.addButtonView}>
          <View style={styles.rectangleView5} />
          <Text style={styles.editButton}>Edit</Text>
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
  editRestaurantText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  editRestaurantIcon: {
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
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 211,
    height: 22,
  },
  changeYourImageHere: {
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
  dropImageHereView: {
    position: "absolute",
    top: 184,
    left: 100,
    width: 211,
    height: 198,
  },
  nameText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 18,
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
  enterTheNewName: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  nameInputView: {
    position: "absolute",
    top: 412,
    left: 66,
    width: 280,
    height: 55,
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
  enterTheNewCategory: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  areaText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 18,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    top: 25,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 280,
    height: 30,
  },
  enterTheNewArea: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  areaInputView: {
    position: "absolute",
    top: 412,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "rgba(229, 158, 0, 0.87)",
    width: 280,
    height: 30,
  },
  editButton: {
    position: "absolute",
    top: 5,
    left: 62,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "NotoSansThai-Medium",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 156,
  },
  addButtonView: {
    position: "absolute",
    top: 514,
    left: 66,
    width: 280,
    height: 30,
  },
  editRestaurantView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default EditRestaurant;
