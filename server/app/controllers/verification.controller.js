const otp = require("../config/OTP");
const pool = require("../config/database");
const client = require("twilio")(otp.apikey, otp.secret, { accountSid: otp.accountSid });

const formatPhonenum = (phonenumber) => {
  let zerostart = 0;
  let buffPhonenum = "";
  if (phonenumber[0] == "0") {
    buffPhonenum = phonenumber.slice(1, phonenumber.length);
  } else {
    buffPhonenum = phonenumber;
  }
  return "+66" + buffPhonenum;
};

const createOTP = (req, res) => {
  client.verify.v2
    .services(otp.verifySid)
    .verifications.create({
      to: formatPhonenum(req.query.phonenum),
      channel: "sms",
    })
    .then((verification) => res.send(verification.status));
};

const verifyOTP = (req, res) => {
  client.verify.v2
    .services(otp.verifySid)
    .verificationChecks.create({
      to: formatPhonenum(req.query.phonenum),
      code: req.query.code,
    })
    .then((verification_check) => res.send(verification_check.status));
};

const getExistPhonenumber = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }
    const phonenum = req.query.phonenum;
    db.query(
      "SELECT IF((SELECT phone_number FROM user_t WHERE phone_number = ? LIMIT 1), 'exist', 'notexist') AS isExist, role FROM user_t WHERE phone_number = ?",
      [phonenum, phonenum],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

const insertUser = (req, res) => {
  pool.getConnection((err, db) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
      return;
    }

    db.query(
      `INSERT INTO user_t (phone_number, role) VALUES (?, ?)`,
      [req.body.phonenum, "Customer"],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        db.release();
      }
    );
  });
};

module.exports = {
  createOTP,
  verifyOTP,
  getExistPhonenumber,
  insertUser,
};
