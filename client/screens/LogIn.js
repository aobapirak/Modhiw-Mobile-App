import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from "react-native";
// const [phoneNum, setPhoneNum] = React.useState(true);

const LogIn = ({ navigation }) => {
  return (
    <View style={styles.logInView}>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <View style={styles.phoneNumView}>
      <View style={styles.rectangleView2} />
        <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Homepage")}} >
          <View style={styles.rectangleView3} />
          <Image
            style={styles.arrowSmallRight1Icon}
            resizeMode="cover"
            source={require("../assets/arrowsmallright-1.png")}
          />
        </TouchableOpacity>
        
        <Image
          style={styles.phoneCall11}
          resizeMode="cover"
          source={require("../assets/phonecall-1-1.png")}
        />
        <Text style={styles.phoneNumberText}>Phone number</Text>
        <TextInput style={styles.text} keyboardType={'phone-pad'}>123</TextInput>
      </View>
      <Text style={styles.welcomeLogInToBookAFood}>
        <Text style={styles.welcomeText}>Welcome, </Text>
        <Text style={styles.logInTo}>Log in to {"\n"}</Text>
        <Text style={styles.foodQueueText}>book a food queue</Text>
      </Text>
      <Image
        style={styles.friedEggIcon}
        resizeMode="cover"
        source={require("../assets/fried-egg.png")}
      />
      <Text style={styles.pleaseEnterYourPhoneNumber}>
        Please enter your phone number
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#f0a500",
    width: 411,
    height: 663,
  },
  rectangleView1: {
    position: "absolute",
    top: 663,
    left: 0,
    backgroundColor: "#f0f0f0",
    width: 411,
    height: 160,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 317,
    height: 65,
  },
  rectangleView3: {
    position: "absolute",
    top: 3,
    left: 253,
    borderRadius: 15,
    backgroundColor: "#1b1a17",
    width: 60,
    height: 60,
  },
  arrowSmallRight1Icon: {
    position: "absolute",
    top: 15,
    left: 266,
    width: 35,
    height: 35,
  },
  phoneCall11: {
    position: "absolute",
    top: 21,
    left: 18,
    width: 25,
    height: 25,
  },
  phoneNumberText: {
    position: "absolute",
    top: 13,
    left: 60,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 30,
    left: 60,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  phoneNumView: {
    position: "absolute",
    top: 630,
    left: 47,
    width: 317,
    height: 65,
  },
  welcomeText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  logInTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  foodQueueText: {
    margin: 0,
  },
  welcomeLogInToBookAFood: {
    position: "absolute",
    top: 445,
    left: 33,
    fontSize: 36,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  friedEggIcon: {
    position: "absolute",
    top: 135,
    left: 144,
    width: 236,
    height: 221,
  },
  pleaseEnterYourPhoneNumber: {
    position: "absolute",
    top: 596,
    left: 33,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  logInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});

export default LogIn;