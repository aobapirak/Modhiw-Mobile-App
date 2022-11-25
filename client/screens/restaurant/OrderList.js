import React, {useState} from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { tickets } from "../../dummydata";

const OrderList = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <View style={styles.orderListView}>
      <ScrollView>
      {tickets.map( (ticket) =>
      <View style={styles.ticketView}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../../assets/subtract.png")}
        />
        {isDone?
        <View style={styles.bookView}>
          <View style={styles.approveButton} />
          <Text style={styles.approveText}>Approve</Text>
          <View style={styles.rejectButton} />
          <Text style={styles.rejectText}>Reject</Text>
        </View>
        :
        <View style={styles.bookView}>
          {/* โน๊ต: อันนี้จะกดปุ๊บเปลี่ยนหมดเลย เพราะเป็น dummy data
                   ต้องไปแก้ว่า onPress => ไปแก้ database 
                   (order status) ยังไม่กด Done => 0 อาหารยังไม่เสร็จ
                   (order status) กด Done => 1 อาหารเสร็จ
                   (order status) กด Approve => 2 ลูกค้าจ่ายตัง
                   (order status) กด Reject => 3 ลูกค้าไม่จ่ายตัง
                   Code line: 18-40 คือส่วนของปุ่ม
          */}
          <TouchableOpacity onPress={ () => {setIsDone(true)}}>
            <View style={styles.doneButton} />
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        }
        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <Text style={styles.food}>{ticket.food}</Text>
          <Text style={styles.note}>{ticket.note}</Text>
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../../assets/image-53.png")}
          />
        </View>
        <Text style={styles.ticketId}>{ticket.queue}</Text>
        <Text style={styles.phoneNumberView}>
          <Text>Phone number: {ticket.phoneNumber}</Text>
          <Text>{"\n"}Time : {ticket.time}</Text>
        </Text>
      </View>
      )}
      </ScrollView>
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
    top: 510,
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
    // borderRadius: 1,
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
  image5Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
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
  image4Icon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  receipt1Icon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  orderListView: {
    position: "relative",
    backgroundColor: "#f3c776",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default OrderList;
