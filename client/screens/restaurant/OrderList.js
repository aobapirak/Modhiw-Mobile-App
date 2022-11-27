import React, {useState,useEffect} from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, Pressable } from "react-native";
import axios from "axios";
import CallModal from "./CallModal";

const OrderList = ({navigation}) => {
  const [tickets,settickets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState();
  const [status,setStatus] = useState(0);
  
  //จริงๆต้องรับจากหน้า HomepageRestaurant
  const restaurant_name = "ชิกกี้ชิก";
  
  useEffect(() => {
    axios.get("http://10.0.2.2:8080/getOrderList",{
      params: {
        restaurantName: restaurant_name
      }
    }).then((response) => {
      settickets(response.data);
    })
  }, []);

  const getDatabase = () => {
    axios.get("http://10.0.2.2:8080/getOrderList",{
      params: {
        restaurantName: restaurant_name
      }
    }).then((response) => {
      settickets(response.data);
    })
  }

  const updateStatus = (id,status_id) => {
    console.log(id);
    axios.patch("http://10.0.2.2:8080/updateStatus",{
      queue_id: id,
      status: status_id
    }).then(() => {
      getDatabase();
    })
  }


  const pressHandle = (ticket,status_id) => {
    setModalVisible(true);
    setData(ticket);
    setStatus(status_id);
  }

  return (
    <View style={styles.orderListView}>
      <CallModal 
        modalVisible={modalVisible} 
        setModalVisible={()=> setModalVisible(!modalVisible)} 
        data={data}
        status={status}
        updateStatus={() => updateStatus(data.queue_id, status)}
      />
      <View style={styles.barAndContent}> 
      <ScrollView>
      {tickets.map( (ticket) =>
      
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../../assets/subtract.png")}
        />
        {ticket.order_status != 0?
        
        <View style={styles.bookView}>
          <TouchableOpacity onPress={ () => {pressHandle(ticket,2)}}>
          <View style={styles.approveButton} />
          <Text style={styles.approveText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {pressHandle(ticket,3)}}>
          <View style={styles.rejectButton} />
          <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.bookView}>
          <TouchableOpacity onPress={ () => {updateStatus(ticket.queue_id,1)}}>
            <View style={styles.doneButton} />
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        }
        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.food}>{ticket.menu_name} ({ticket.ingredient})</Text>
          <Text style={styles.note}>Note: {ticket.note}</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../../assets/image-53.png")}
          />
        </View>
        <Text style={styles.ticketId}>E{ticket.queue_id}</Text>
        <Text style={styles.phoneNumberView}>
          <Text>Phone number: {ticket.phone_number}</Text>
          <Text>{"\n"}Time : {ticket.order_time.substring(0,10)} {ticket.order_time.substring(11,16)}</Text>
        </Text>
      </View>
      )}
      </ScrollView>
      </View>
      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../../assets/rectangle-11.png")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress = {() => navigation.navigate("HomepageRestaurant")}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../../assets/homeIcon.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.billIcon}
          resizeMode="cover"
          source={require("../../assets/orderIconYellow.png")}
        />
        <TouchableOpacity activeOpacity = { .5 }>
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
  subtractIcon: {
    position: "relative",
    width: 370,
    height: 570,
  },
  doneButton: {
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "#E59E00",
    width: 200,
    height: 35,
  },
  approveButton: {
    position: "absolute",
    top: 0,
    left: -15,
    borderRadius: 10,
    backgroundColor: "#00790c",
    width: 100,
    height: 35,
  },
  rejectButton: {
    position: "absolute",
    top: 0,
    left: 132,
    borderRadius: 10,
    backgroundColor: "#ce0808",
    width: 100,
    height: 35,
  },
  doneText: {
    position: "absolute",
    top: 6,
    left: 80,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  approveText: {
    position: "absolute",
    top: 6,
    left: 5,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  rejectText: {
    position: "absolute",
    top: 6,
    left: 160,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  bookView: {
    position: "absolute",
    top: 460,
    left: 78,
    width: 227,
    height: 35,
  },
  lineView: {
    position: "absolute",
    top: 282,
    left: 25,
    borderStyle: "dashed",
    borderColor: "#000",
    borderTopWidth: 2.8,
    width: 320,
    height: 1,
  },
  food: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 24,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  note: {
    position: "absolute",
    top: 38,
    left: 46,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  menuView: {
    position: "absolute",
    top: 347,
    left: 50,
    width: 252,
    height: 55,
  },
  ticketId: {
    position: "absolute",
    top: 75,
    left: 50,
    fontSize: 80,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  phoneNumber: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  phoneNumberView: {
    position: "absolute",
    top: 181,
    left: 50,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  ticketView: {
    marginTop: -10,
    marginBottom: 60,
    top: 53,
    left: 21,
    width: 370,
    height: 570,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
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
  homeIcon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  barView: {
    position: "absolute",
    top: 715,
    width: "100%",
    height: 60,
  },
  orderListView: {
    position: "relative",
    backgroundColor: "#f3c776",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  barAndContent: {
    marginBottom: 59
  }
});

export default OrderList;
