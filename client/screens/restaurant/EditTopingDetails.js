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
import { useFonts } from "expo-font";

const EditTopingDetails = ({ route, navigation }) => {
  const [switchOpen, setSwitchOpen] = useState(1);
  const [newName, setNewName] = useState(route.params.name);
  const [newPrice, setNewPrice] = useState(route.params.price);
  const restaurant_name = route.params.restaurant_name;
  const [fontsLoaded] = useFonts({
    "NotoSansThai-Regular": require("../../assets/fonts/NotoSansThai-Regular.ttf"),
    "NotoSansThai-Medium": require("../../assets/fonts/NotoSansThai-Medium.ttf"),
    "NotoSansThai-SemiBold": require("../../assets/fonts/NotoSansThai-SemiBold.ttf"),
    "NotoSansThai-Bold": require("../../assets/fonts/NotoSansThai-Bold.ttf"),
  });

  useEffect(() => {
    axios
      .get("http://10.0.2.2:8080/getTopingStatus", {
        params: {
          restaurant_name: restaurant_name,
          toping: route.params.name,
        },
      })
      .then((response) => {
        setSwitchOpen(response.data[0].toping_status);
      });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const Edit = () => {
    axios
      .patch("http://10.0.2.2:8080/updateToping", {
        restaurant_name: restaurant_name,
        newName: newName,
        newPrice: newPrice,
        oldName: route.params.name,
      })
      .then((response) => {
        alert("Successfully edited");
      })
      .catch((err) => {
        alert("Error to edit " + newName);
      });
    navigation.navigate("Edit", {
      user_phonenum: route.params.user_phonenum,
      restaurant_name: route.params.restaurant_name,
    });
  };

  const Delete = () => {
    axios
      .delete("http://10.0.2.2:8080/deleteToping", {
        params: {
          restaurant_name: restaurant_name,
          toping: route.params.name,
        },
      })
      .then((response) => {
        alert("Successfully deleted");
      })
      .catch((err) => {
        alert("Error to delete " + route.params.name);
      });
    navigation.navigate("Edit", {
      user_phonenum: route.params.user_phonenum,
      restaurant_name: route.params.restaurant_name,
    });
  };

  function toggleSwitch() {
    let status = 0;
    setSwitchOpen((switchOpen) => !switchOpen);
    if (!switchOpen == 1) {
      status = 1;
    } else {
      status = 0;
    }
    axios.patch("http://10.0.2.2:8080/updateTopingStatus", {
      restaurant_name: restaurant_name,
      toping: route.params.name,
      status: status,
    });
  }

  return (
    <View style={styles.editTopingDetailsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit {route.params.name}</Text>
      <Image
        style={styles.editTopingIcon}
        resizeMode="cover"
        source={require("../../assets/edittopingicon.png")}
      />
      <View style={styles.nameInputView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView1} />
        <TextInput
          style={styles.enterTheNewName}
          onChangeText={setNewName}
          value={newName}
        />
      </View>
      <View style={styles.priceInputView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView2} />
        <TextInput
          style={styles.enterTheNewPrice}
          onChangeText={setNewPrice}
          value={newPrice.toString(10)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Edit();
        }}
      >
        <View style={styles.editButtonView}>
          <View style={styles.rectangleView3} />
          <Text style={styles.editButton}>Edit</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Delete();
        }}
      >
        <View style={styles.deleteButtonView}>
          <View style={styles.rectangleView4} />
          <Text style={styles.deleteButton}>Delete</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.availableView}>
        <TouchableOpacity
          style={[
            styles.outterSwitch,
            switchOpen
              ? { justifyContent: "flex-end", backgroundColor: "#00790c" }
              : { justifyContent: "flex-start", backgroundColor: "#B40707" },
          ]}
          activeOpacity={1}
          onPress={toggleSwitch}
        >
          <View style={[styles.innerSwitch]} />
        </TouchableOpacity>
        {switchOpen ? (
          <Text style={styles.availableText}>Available</Text>
        ) : (
          <Text style={styles.notAvailableText}>Not available</Text>
        )}
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
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "NotoSansThai-SemiBold",
    color: "#000",
    textAlign: "left",
  },
  editTopingIcon: {
    position: "absolute",
    top: 81,
    left: 37,
    width: 75,
    height: 75,
  },
  nameText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 16,
    fontFamily: "NotoSansThai-Medium",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
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
    top: 27,
    left: 15,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  nameInputView: {
    position: "absolute",
    top: 189,
    left: 66,
    width: 280,
    height: 55,
  },
  priceText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 16,
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
  enterTheNewPrice: {
    position: "absolute",
    top: 27,
    left: 15,
    fontSize: 14,
    fontFamily: "NotoSansThai-Regular",
    color: "#505050",
    textAlign: "left",
  },
  priceInputView: {
    position: "absolute",
    top: 261,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#e59e00",
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
    width: 157,
  },
  editButtonView: {
    position: "absolute",
    top: 346,
    left: 66,
    width: 280,
    height: 30,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#b40707",
    width: 280,
    height: 30,
  },
  deleteButton: {
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
    width: 157,
  },
  deleteButtonView: {
    position: "absolute",
    top: 393,
    left: 66,
    width: 280,
    height: 30,
  },
  d546d1dce5c7f2832a396d0516cfRIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 51,
    height: 32,
  },
  availableText: {
    position: "absolute",
    left: 55,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#00790c",
    textAlign: "left",
  },
  notAvailableText: {
    position: "absolute",
    left: 55,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    color: "#B40707",
    textAlign: "left",
  },
  availableView: {
    position: "absolute",
    top: 440,
    left: 66,
    width: 118,
    height: 32,
  },
  editTopingDetailsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
  openText: {
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    top: 0,
    // left: 38,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "NotoSansThai-Regular",
    textAlign: "left",
  },
  innerSwitch: {
    width: 17,
    height: 17,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  outterSwitch: {
    width: 40,
    height: 20,
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2,
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

export default EditTopingDetails;
