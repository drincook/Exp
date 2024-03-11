"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function post(formData: FormData): Promise<any> {
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
    return {
      error: "An error occurred while sending the email",
    };
  }
}
