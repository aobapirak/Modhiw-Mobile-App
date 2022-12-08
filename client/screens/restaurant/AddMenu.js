import React, {useState} from "react";
import { StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity, Platform  } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddMenu = ({ navigation, route}) => {
  const restaurant_name = route.params.name;
  const [menu_name, setMenuName] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  };


//   const Add = async () => {
//     console.log(image);
//     const formData = new FormData();
//     formData.append('image', {
//       name: image.fileName,
//       type: image.type,
//       uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
//     });

//     fetch(`http://10.0.2.2:8080/upload`, {
//       method: 'POST',
//       data: formData,
//       headers: { "Content-Type": "multipart/form-data" }
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('response', response);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });

//     // try {
//     //     const response = await axios({
//     //     method: "post",
//     //     url: "http://10.0.2.2:8080/upload",
//     //     data: formData,
//     //     headers: { "Content-Type": "multipart/form-data" },
//     //     });
//     //     try{
//     //         axios.post("http://10.0.2.2:8080/addMenu",{
//     //         menu_name: menu_name,
//     //         restaurant_name: restaurant_name,
//     //         price: price,
//     //         picture: response.data.filename
//     //         }).then((response) => {
//     //           alert("Successfully added");
//     //         }).catch((err) => {
//     //           alert("Error to add topping because this topping already exists");
//     //         });
//     //     }
//     //     catch(err){
//     //         console.log("err:",err);
//     //     }
//     //   } catch(error) {
//     //     console.log("err on upload photo",error);
//     //   }
// }

const createFormData = (image, body = {}) => {
  const data = new FormData();

  data.append('image', {
    name: image.fileName,
    type: image.type,
    uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const Add = async () => {
  const formData = new FormData();
  console.log(image, "image");
  formData.append('image',image);

  try {
      const response = await axios({
      method: "post",
      url: "http://10.0.2.2:8080/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      });
      // try{
      //     axios.post("http://10.0.2.2:8080/uploadTopup",{
      //     user_id: user_id,
      //     amount: amount,
      //     receipt: response.data.filename,
      //     is_withdrawal: 0
      //     })
      // }
      // catch(err){
      //     console.log("err:",err);
      // }
    } catch(error) {
      console.log("err on upload photo",error);
    }
}

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
      <View style={styles.rectangleView1} />

      <Text style={styles.dropYourImageHere}>Drop your image here</Text>
      <View style={styles.dropYourImageHere}> 
      {image == undefined ? <Button title="Choose Photo" onPress={pickImage} />
      :
      <Image source={{uri:image.uri}} style={{width:300,height:300}}/>}
        
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../assets/vector.png")}
      />

      <View style={styles.nameView}>
        <Text style={styles.nameText}>Name</Text>
        <View style={styles.rectangleView2} />
        <TextInput 
        style={styles.enterTheNameOfTheFood} 
        onChangeText={setMenuName}
        value={menu_name}
        placeholder="Enter the name of the food"
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.rectangleView3} />
        <TextInput 
          style={styles.enterThePriceOfTheFood}
          onChangeText={setPrice}
          value={price}
          placeholder="Enter the price of the food"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity activeOpacity = { .5 } onPress = { () => {Add()}}>
      <View style={styles.addView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.signIn2}>Add menu</Text>
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
  addMenuText: {
    position: "absolute",
    top: 100,
    left: 126,
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
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
    height: "7.17%",
    width: "14.36%",
    top: "30.01%",
    right: "43.07%",
    bottom: "62.82%",
    left: "42.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
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
  enterTheNameOfTheFood: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
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
  enterThePriceOfTheFood: {
    position: "absolute",
    top: 26,
    left: 15,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
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
    fontFamily: "SF Pro Rounded",
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
    top: 569,
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
});

export default AddMenu;
