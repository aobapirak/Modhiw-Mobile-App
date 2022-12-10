import React from 'react';
import { Image, StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useFonts } from 'expo-font';

const CallModal = ({ modalVisible, setModalVisible, data, status, updateStatus}) => {
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
              <Text style={styles.modalText}>Order approval</Text>
              <View style={styles.menuViewModal}>
              {
              <View>
                <Text style={styles.foodModal}>{data.menu_name} ({data.ingredient})</Text>
                <Text style={styles.noteModal}>Note: {data.note}</Text>
              </View>
              }
              
              <Image
                style={styles.image5Icon}
                resizeMode="cover"
                source={require("../../assets/image-53.png")}
              />
              </View>
            
            {/* Accept Change queue_status */}
              <Pressable
                style={[styles.button, styles.buttonAccept]}
                onPress={() => {
                    setModalVisible()
                    updateStatus()
                    }}
              >
              {status == 2?
                <Text style={styles.textStyleAccept}>Approve</Text>
                :
                <Text style={styles.textStyleReject}>Reject</Text>
              }
                
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

const styles = StyleSheet.create({ 
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
        backgroundColor: "#efefef",
      },
      button: {
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#fff",
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
      textStyleReject: {
        color: "#ce0808",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 14
      },
      textStyleCancel: {
        color: "#000",
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