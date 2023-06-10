"use client";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();
export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  const client = twilio(accountSid, authToken);

  try { 
    const response = await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: "whatsapp:7199170723",
    });

    console.log(response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
