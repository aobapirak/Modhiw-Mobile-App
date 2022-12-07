const otp = require("../config/OTP");
const client = require("twilio")(otp.accountSid, otp.authToken);

const formatPhonenum = (phonenumber) => {
    let zerostart = 0;
    let buffPhonenum = ""
    if (phonenumber[0] == "0") {
        for (let i = 1; i < phonenumber.length; i++) {
            buffPhonenum[i-1] = phonenumber[i];
        }
    } else {
        buffPhonenum = phonenumber
    }

    return "+66" + buffPhonenum;
}

const createOTP = (phonenumber) => {
    client.verify.v2
        .services(otp.verifySid)
        .verifications.create({ to: formatPhonenum(0964418826), channel: "sms" })
}

const verfifyOTP = (phonenumber, otpCode) => {
    client.verify.v2
        .services(otp.verifySid)
        .verificationChecks.create({ to: formatPhonenum(0964418826), code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
}

//crateOTP(0964418826);
//verfifyOTP(0964418826, 941546);

module.exports = {
    createOTP,
    verfifyOTP
}