"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail);

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "eldrincook@gmail.com",
      subject: "Message from conatact from",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
};
