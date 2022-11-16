import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const Verification = ({
    route: {
        params: {phoneNumber},
    },
}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''})

    return (
        <View style={styles.verificationView}>
          <Text style={styles.verifyPhoneText}>Verify Phone</Text>
          <Text style={styles.phoneNumber}>
            Code is sent to {phoneNumber}
          </Text>
          <Text style={styles.didNotRecieveCodeResendN}>
            <Text style={styles.didNotRecieve}>Did not recieve code? </Text>
            <Text style={styles.resendNewCode}>Resend New Code</Text>
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
            onPress={() => console.log(otp)}
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
      color: "#e59e00",
    },
    didNotRecieveCodeResendN: {
      position: "absolute",
      top: 307,
      left: 65,
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