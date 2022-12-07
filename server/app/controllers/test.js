/*
require('config')

const express = require('express')
const app = express()
const port = 3000

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

// /login
//     - phone number
//     - channel (sms/call)

// /verify
//     - phone number
//     - code

app.get('/', (req, res)=>{
    res.status(200).send({
        message: "You are on Homepage",
        info: {
            login: "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)",
            verify: "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
        }
    })
})

// Login Endpoint
app.get('/login', (req,res) => {
     if (req.query.phonenumber) {
        client
        .verify
        .services(process.env.SERVICE_ID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel==='call' ? 'call' : 'sms' 
        })
        .then(data => {
            res.status(200).send({
                message: "Verification is sent!!",
                phonenumber: req.query.phonenumber,
                data
            })
        }) 
     } else {
        res.status(400).send({
            message: "Wrong phone number :(",
            phonenumber: req.query.phonenumber,
            data
        })
     }
})

// Verify Endpoint
app.get('/verify', (req, res) => {
    if (req.query.phonenumber && (req.query.code).length === 4) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "User is Verified!!",
                        data
                    })
                }
            })
    } else {
        res.status(400).send({
            message: "Wrong phone number or code :(",
            phonenumber: req.query.phonenumber,
            data
        })
    }
})

// listen to the server at 3000 port
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})
*/

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC96ba65b674c6b894da68e721dc3cd966";
const authToken = "5a1e2a0f3eb383bb76231207f3d6c22b";
const verifySid = "VA851d45d159b2134d8094a332debd662f";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+66964418826", channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+66964418826", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });


  