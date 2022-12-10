import * as React from "react";
import { Image, StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useFonts } from 'expo-font';
import axios from "axios";

const CallModal = ({ modalVisible, setModalVisible, data, navigation, user_phonenum, restaurant, menu}) => {
    const [fontsLoaded] = useFonts({
      'NotoSansThai-Regular': require('../assets/fonts/NotoSansThai-Regular.ttf'),
      'NotoSansThai-Medium': require('../assets/fonts/NotoSansThai-Medium.ttf'),
      'NotoSansThai-SemiBold': require('../assets/fonts/NotoSansThai-SemiBold.ttf'),
      'NotoSansThai-Bold': require('../assets/fonts/NotoSansThai-Bold.ttf'),
    });
    let buff = "";
  
    if (!fontsLoaded) {
      return null;
    }

    if(data.toping){
      for (let i = 0; i < data.toping.length; i++) {
        if (i > 0) {
          buff += ", ";
        }
        buff += data.toping[i];
      }
    }

    console.log(restaurant);

    const checkBeforeConfirm = () => {
      axios.get("http://10.0.2.2:8080/getStatusCheck",{
      params: {
        restaurantName: restaurant.restaurant_name,
        ingredient: data.ingredient
      }
    }).then((response) => {
      console.log(response.data);
      console.log(response.data[0].ingredient_status);
      if(response.data[0].restaurant_status == "Closed"){
        alert("The restaurant is closed")
      }
      else if(response.data[0].ingredient_status == 0 ){
        alert("Insufficient ingredient")
      }
      else{
        goBookedQueue(data.ingredient, data.toping, data.booknote);
      }
      
    })
    }

    const goBookedQueue = (ingredient, toping, note) => {
      navigation.navigate('BookedQueue', { 
        user_phonenum: user_phonenum,
        restaurant: restaurant, 
        menu: menu, 
        ingredient: ingredient, 
        toping: toping, 
        booknote: note
      });
    }

      return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible();
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Book queue</Text>
                <View style={styles.menuViewModal}>
                {
                <View>
                  <Text style={styles.foodModal}>{data.menu} ({data.ingredient})</Text>
                  <Text style={styles.noteModal}>Note: {buff} {data.booknote}</Text>
                </View>
                }
                
                <Image
                  style={styles.image5Icon}
                  resizeMode="cover"
                  source={require("../assets/image-53.png")}
                />
                </View>
              
              {/* Accept Change queue_status */}
                <Pressable
                  style={[styles.button, styles.buttonAccept]}
                  onPress={() => {
                      setModalVisible()
                      checkBeforeConfirm()
                      }}
                >
                  <Text style={styles.textStyleAccept}>Confirm</Text>
                  
                  
                </Pressable>
  
              {/* Cancel do nothing */}
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setModalVisible()}
                >
                  <Text style={styles.textStyleCancel}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
      )
    };

const styles =  StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 128
      },
      modalView: {
        width: 300,
        height: 300,
        margin: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
      },
      button: {
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#efefef",
        position: "absolute",
        width: 90
    
      },
      buttonAccept: {
        top: 230,
        left: 40
      },
      buttonCancel: {
        top: 230,
        left: 170
      },
      textStyleAccept: {
        color: "#00790c",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 14
      },
      textStyleCancel: {
        color: "#ce0808",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 14
      },
      modalText: {
        position: "absolute",
        top: 50,
        left: 40,
        fontSize: 20,
        fontWeight: "600"
      },
      foodModal: {
        position: "absolute",
        top: -6,
        left: 36,
        fontSize: 18,
        fontFamily: "NotoSansThai-Medium",
        color: "#000",
        textAlign: "left",
      },
      noteModal: {
        position: "absolute",
        top: 16,
        left: 36,
        fontSize: 14,
        fontFamily: "NotoSansThai-Regular",
        color: "#505050",
        textAlign: "left",
      },
      menuViewModal: {
        position: "absolute",
        top: 130,
        left: 55,
        width: 252,
        height: 55,
      },
})

export default CallModal;