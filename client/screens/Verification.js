import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import axios from "axios";

  const Verification = ({ navigation, route }) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''})
    const [mergedOTP, setMergedOTP] = useState("")
    const [otpApprove, setOtpApprove] = useState("approved")
    const [exist, setExist] = useState(false)
    const [role, setRole] = useState("")

    useEffect(() => {
      /*
      axios.get("http://10.0.2.2:8080/createOTP",{
        params: {
          phonenum: route.params.user_phonenum
        }
      })
      */
    }, []);

    const goHomepage = (phonenum) => {
      navigation.navigate('Homepage', {user_phonenum: phonenum});
    }

    const goHomepageRestaurant = (phonenum) => {
      navigation.navigate('HomepageRestaurant', {user_phonenum: phonenum});
    }

    const createNewUser = (phonenum) => {
      axios.post("http://10.0.2.2:8080/insertUser",{
          phonenum: phonenum
      })
    }

    const checkPhonenumExist = (phonenumToCheck) => {
      axios.get("http://10.0.2.2:8080/existPhonenumber",{
        params: {
          phonenum: route.params.user_phonenum
        }
      })
      .then((response) => {
        if (response.data[0]) {
          console.log("exist");
          setRole(response.data[0].role);
        } else {
          console.log("not exist");
          createNewUser(route.params.user_phonenum);
          setRole("Customer");
        }
      });
    }

    const mergeOTP = (OTPtoMerge) => {
      let buffOTP = "";
      buffOTP = OTPtoMerge[1] + OTPtoMerge[2] + OTPtoMerge[3] + OTPtoMerge[4];
      setMergedOTP(buffOTP);
    }

    const reSendOTP = () => {
      axios.get("http://10.0.2.2:8080/createOTP", {
        params: {
          phonenum: route.params.user_phonenum
        }
      })
    }

    const verifyOTP = () => {
      mergeOTP(otp);
      axios.get("http://10.0.2.2:8080/verifyOTP",{
        params: {
          phonenum: route.params.user_phonenum,
          code: mergedOTP
        }
      })
      .then((response) => {
        setOtpApprove("approved");
      });
    }

    if (otpApprove == "approved") {
      checkPhonenumExist(route.params.user_phonenum);
      console.log("role ", role)
      if (role == "Restaurant") {
        goHomepageRestaurant(route.params.user_phonenum);
      } else if (role == "Customer") {
        goHomepage(route.params.user_phonenum);
      }
    } else if (otpApprove == "pending") {
      alert("Invalid OTP");
      setOtpApprove("");
    }

    console.log(otpApprove)

    return (
        <View style={styles.verificationView}>
          <Text style={styles.verifyPhoneText}>Verify Phone</Text>
          <Text style={styles.phoneNumber}>
            Code is sent to {route.params.user_phonenum}
          </Text>
          <Text style={styles.didNotRecieveCodeResendN}>
            <TouchableOpacity activeOpacity = { 1 } >
              <Text style={styles.didNotRecieve}>Did not recieve code? </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress = { () => { reSendOTP() }} >
              <Text style={styles.resendNewCode}>Resend New Code</Text>
            </TouchableOpacity>
          </Text>
          <View style={styles.numberInputView}>
            <View style={styles.firstInput}>
                <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={firstInput}
                    onChangeText={(text) => {
                        setOtp({...otp, 1: text})
                        text && secondInput.current.focus()
                    }}
                />
            </View>
            <View style={styles.secondInput}>
                <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={secondInput}
                    onChangeText={(text) => {
                        setOtp({...otp, 2: text})
                        text ? thirdInput.current.focus() : firstInput.current.focus()
                    }}
                />
            </View>
            <View style={styles.thirdInput}>
                <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={thirdInput}
                    onChangeText={(text) => {
                        setOtp({...otp, 3: text})
                        text ? fourthInput.current.focus() : secondInput.current.focus()
                    }}
                />
            </View>
            <View style={styles.fourthInput}>
                <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fourthInput}
                    onChangeText={(text) => {
                        setOtp({...otp, 4: text})
                        !text && thirdInput.current.focus()
                    }}
                />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => verifyOTP()}
          >
            <View style={styles.continueView}>
                <View style={styles.rectangleView4} />
                <Text style={styles.continueText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    verifyPhoneText: {
      position: "absolute",
      top: 84,
      left: 138,
      fontSize: 24,
      fontWeight: "600",
      fontFamily: "SF Pro Rounded",
      color: "#000",
      textAlign: "left",
    },
    phoneNumber: {
      position: "absolute",
      top: 143,
      left: 82,
      fontSize: 20,
      fontWeight: "500",
      fontFamily: "SF Pro Rounded",
      color: "#777",
      textAlign: "left",
    },
    didNotRecieve: {
      color: "#777",
    },
    resendNewCode: {
      marginTop: 10,
      color: "#e59e00",
    },
    didNotRecieveCodeResendN: {
      position: "absolute",
      top: 307,
      left: 82,
      fontSize: 16,
      fontWeight: "500",
      fontFamily: "SF Pro Rounded",
      textAlign: "left",
    },
    otpText: {
        textAlign: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 22,
    },
    firstInput: {
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: 10,
      backgroundColor: "#d4d4d4",
      width: 45,
      height: 45,
    },
    secondInput: {
        position: "absolute",
        top: 0,
        left: 60,
        borderRadius: 10,
        backgroundColor: "#d4d4d4",
        width: 45,
        height: 45,
    },
    thirdInput: {
      position: "absolute",
      top: 0,
      left: 120,
      borderRadius: 10,
      backgroundColor: "#d4d4d4",
      width: 45,
      height: 45,
    },
    fourthInput: {
      position: "absolute",
      top: 0,
      left: 180,
      borderRadius: 10,
      backgroundColor: "#d4d4d4",
      width: 45,
      height: 45,
    },
    numberInputView: {
      position: "absolute",
      top: 212,
      left: 93,
      width: 225,
      height: 45,
    },
    rectangleView4: {
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: 10,
      backgroundColor: "#e59e00",
      width: 200,
      height: 42,
    },
    continueText: {
      position: "absolute",
      top: 11,
      left: 68,
      fontSize: 16,
      fontWeight: "600",
      fontFamily: "SF Pro Rounded",
      color: "#fff",
      textAlign: "left",
    },
    continueView: {
      position: "absolute",
      top: 376,
      left: 105,
      width: 200,
      height: 42,
    },
    verificationView: {
      position: "relative",
      backgroundColor: "#fff",
      flex: 1,
      width: "100%",
      height: 823,
      overflow: "hidden",
    },
  });

export default Verification;