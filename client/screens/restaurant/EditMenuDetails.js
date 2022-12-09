import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

const EditMenuDetails = () => {
  const [switchOpen, setSwitchOpen] = useState(true);
  function toggleSwitch() {
    let status = "";
    setSwitchOpen(switchOpen => !switchOpen)
    if(!switchOpen == true){
      status = "Available"
    } else{
      status = "Not available"
    }
    // axios.patch("http://10.0.2.2:8080/updateRestaurantStatus",{
    //   restaurant_status: status,
    //   restaurant_name: restaurant_name
    // })
  }

  return (
    <View style={styles.editMenuDetailsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit ข้าวกะเพรา</Text>
      <Image
        style={styles.editMenuIcon}
        resizeMode="cover"
        source={require("../../assets/editmenuicon.png")}
      />
      <View style={styles.dropImageHereView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.dropYourImageHere}>Drop your image here</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../assets/vector.png")}
        />
      </View>
      <View style={styles.nameInputView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <TextInput style={styles.enterTheNewName}>
          Enter the new name
        </TextInput>
      </View>
      <View style={styles.priceInputView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <TextInput style={styles.enterTheNewPrice}>
          Enter the new price
        </TextInput>
      </View>
      <View style={styles.editButtonView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.editButton}>Edit</Text>
      </View>
      <View style={styles.deleteButtonView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.deleteButton}>Delete</Text>
      </View>
      <View style={styles.availableView}>
        <TouchableOpacity 
          style={[
          styles.outterSwitch, 
          switchOpen
          ? {justifyContent:'flex-end', backgroundColor: '#00790c'}
          : {justifyContent: 'flex-start', backgroundColor: '#B40707'}
          ]} 
          activeOpacity={1} 
          onPress={(toggleSwitch)}
          >
          <View
            style={[styles.innerSwitch]}
          />
        </TouchableOpacity>
        {
          switchOpen
          ? <Text style={styles.availableText}>Available</Text>
          : <Text style={styles.notAvailableText}>Not available</Text>
        }
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
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  editMenuIcon: {
    position: "absolute",
    top: 94,
    left: 50,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 3,
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
    top: 132,
    left: 0,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
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
    height: "29.8%",
    width: "27.96%",
    top: "31.82%",
    right: "36.49%",
    bottom: "38.38%",
    left: "35.55%",
    maxWidth: "100%",
    overflow: "hidden",
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
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
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
  priceText: {
    position: "absolute",
    top: -5,
    left: 0,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
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
  enterTheNewPrice: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  priceInputView: {
    position: "absolute",
    top: 484,
    left: 66,
    width: 280,
    height: 55,
  },
  rectangleView4: {
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
    top: 4,
    left: 62,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  editButtonView: {
    position: "absolute",
    top: 569,
    left: 66,
    width: 280,
    height: 30,
  },
  rectangleView5: {
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
    top: 4,
    left: 62,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 157,
  },
  deleteButtonView: {
    position: "absolute",
    top: 614,
    left: 66,
    width: 280,
    height: 30,
  },
  switchIcon: {
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
    fontFamily: "SF Pro Rounded",
    color: "#00790c",
    textAlign: "left",
  },
  notAvailableText: {
    position: "absolute",
    left: 55,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: '#B40707',
    textAlign: "left",
  },
  availableView: {
    position: "absolute",
    top: 659,
    left: 66,
    width: 118,
    height: 32,
  },
  editMenuDetailsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
  openText: {
    position: "absolute",
    flexDirection:'row', 
    flexWrap:'wrap',
    top: 0,
    // left: 38,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    textAlign: "left",
  },
  innerSwitch: {
    width: 17,
    height: 17,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  outterSwitch: {
    width: 40,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
});

export default EditMenuDetails;
