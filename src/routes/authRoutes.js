
import { Router } from 'express';
import User from '../models/userSchema.js'
import nodemailer from 'nodemailer'
import otpGenerator from "otp-generator";
const routes = Router()




// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: 'onedevil0009@gmail.com',
    pass: process.env.SMTP_PASS,
  },
});

const otp = Math.floor(100000 + Math.random() * 900000);

routes.post('/sendOpt', async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).send({
      success: false,
      message: "email is required"
    });

  };

  let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
  let existingEmail = await User.findOne({ email: email })
  if (!existingEmail) {


    let user = new User({
      email: email,
      otp: otp

    }).save()

  } else {
    await User.findOneAndUpdate({ email: email }, { otp: otp })
  }



  const info = await transporter.sendMail({
    from: `"Identity Hub" <${process.env.EMAIL}>`,
    to: email,
    subject: "Email Verification OTP",
    text: `Your OTP is ${otp}`,
    html: `
    <h2>Identity Hub</h2>
    <p>Your verification code is:</p>
    <h1>${otp}</h1>
    <p>This code will expire in 5 minutes.</p>
  `,
  });

  console.log("Email sent:", info.messageId);

  res.send("otp dan")


});

//Login Part
routes.post('/login/:email', async (req, res) => {
  const { email } = req.params
  const { otp } = req.body
  let existingEmail = await User.findOne({ email: email })

  // console.log(existingEmail.otp)
  if (!existingEmail.isLogin) {
    return res.send("before you do logout")
  }
  if (!existingEmail.otp) {
    return res.send("oop")
  }
  if (existingEmail.otp == otp) {
    await User.findOneAndUpdate({ email: email }, { otp: "", isLogin: true })
    res.send('login')
  } else {
    res.send('otp not matched')
  }


})

export default routes


