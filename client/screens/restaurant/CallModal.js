import React from 'react';
import { Image, StyleSheet, View, Text, Modal, Pressable } from "react-native";

const CallModal = ({ modalVisible,setModalVisible,data,status,updateStatus}) => {
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
              {data == undefined ?
              <View>
                <Text style={styles.foodModal}>ข้าวกะเพรา (หมูกรอบ)</Text>
                <Text style={styles.noteModal}>Note: พิเศษ</Text>
              </View>
              :
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
        fontFamily: "SF Pro Rounded",
        fontWeight: "900",
        color: "#000",
        textAlign: "left",
      },
      noteModal: {
        position: "absolute",
        top: 16,
        left: 36,
        fontSize: 14,
        fontFamily: "SF Pro Rounded",
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