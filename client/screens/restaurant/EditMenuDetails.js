import React, { useState , useEffect} from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

const EditMenuDetails = ({navigation, route}) => {
  const [switchOpen, setSwitchOpen] = useState(1);
  const menu_name = route.params.menu_name;
  const restaurant_name = route.params.restaurant_name;
  const [price,setPrice] = useState(route.params.price);
  const [image,setImage] = useState(route.params.picture);

  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getMenuStatus", {
      params: {
        restaurant_name: restaurant_name,
        menu_name: menu_name
      }
    })
    .then((response) => {
      setSwitchOpen(response.data[0].menu_status);
    })
  }, []);
  
  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      if (!response.cancelled) {
        setImage(response.uri);
      }
    }
  };

  const update = async () => {
    const formData = new FormData();
    formData.append('image', {
      name: new Date() + '_menuImage',
      uri: image,
      restaurantName: restaurant_name,
      type: 'image/jpg',
    });
    try {
      const res = await axios.post('http://10.0.2.2:8080/upload', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      });
      console.log(res.data);
      try{
        axios.patch("http://10.0.2.2:8080/updateMenu",{
          restaurant_name: restaurant_name,
          menu_name: menu_name,
          price: price,
          picture: res.data
        }).then((response) => {
          alert("Successfully update");
        }).catch((err) => {
          alert("Error to edit data");
        });
        navigation.navigate("Edit", {name: restaurant_name});
      }
      catch(err){
          console.log("err:",err);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  function toggleSwitch() {
    let status = 0;
    setSwitchOpen(switchOpen => !switchOpen)
    if(!switchOpen == 1){
      status = 1;
    } else{
      status = 0;
    }
    axios.patch("http://10.0.2.2:8080/updateMenuStatus",{
      restaurant_name: restaurant_name,
      menu_name: menu_name,
      status: status
    })
  }

  return (
    <View style={styles.editMenuDetailsView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.barIcon}
        resizeMode="cover"
        source={require("../../assets/bar.png")}
      />
      <Text style={styles.editText}>Edit {menu_name}</Text>
      <Image
        style={styles.editMenuIcon}
        resizeMode="cover"
        source={require("../../assets/editmenuicon.png")}
      />


      {image == "" ? 
      <TouchableOpacity activeOpacity = { .5 } onPress = {openImageLibrary}>
        <View style={styles.rectangleView1} />
        <Text style={styles.dropYourImageHere}>Drop your image here</Text>
        <Image
          style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../../assets/vector.png")}
        />
      </TouchableOpacity>
      :
      <TouchableOpacity activeOpacity = { .5 } onPress = {openImageLibrary}>
      <View style={styles.dropYourImageHere}>
        <Image source={{uri:image}} style={{width:200,height:200,top:-45,opacity: 0.6,borderRadius:10}}/>
        <Text style={{top: -150,color: "black"}}>Click here to change image</Text>
      </View>
      </TouchableOpacity>
      }

      <View style={styles.priceInputView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <TextInput 
          style={styles.enterTheNewPrice}
          onChangeText={setPrice}
          value={price}
          placeholder="Enter the new price"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity activeOpacity={.5} onPress= {() => {update()}}>
      <View style={styles.editButtonView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.editButton}>Edit</Text>
      </View>
      </TouchableOpacity>


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
    top: 404,
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
    top: 489,
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
    top: 539,
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
