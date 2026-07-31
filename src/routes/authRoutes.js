
import { Router } from 'express';
import User from '../models/userSchema.js'
import nodemailer from 'nodemailer'
const routes = Router()




// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: 'mjmunna692@gmail.com ',
    pass:process.env.SMTP_PASS,
  },
});


routes.post('/sendOpt',async(req, res)=>{
  const {email}=req.body

  if (!email) {
  return res.status(400).send({
  success:false,
  message:"email is required"
});

  };

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




});


export default routes


