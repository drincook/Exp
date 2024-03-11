"use client";
import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import Button from "@/components/ui/Button";
import Map from "@/components/ui/Map";
import post from "../api/send/route";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [sentCount, setSentCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsSending(true);
      if (sentCount >= 2) {
        setMessage("Ha alcanzado el límite de mensajes enviados.");
        return;
      }
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("senderEmail", formData.senderEmail);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      await post(formDataToSend);
      setFormData({
        name: "",
        senderEmail: "",
        subject: "",
        phone: "",
        message: "",
      });
      setSentCount(sentCount + 1);
      setMessage("Correo enviado con éxito");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false); // Restablecer el estado de envío
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/contact.jpg"
          fill
          alt="contact image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          Contact Us
        </h1>
      </div>
      <div className="p-10 leading-8 text-lg mt-10 relative m-auto rouded-lg text-center">
        <h1 className="text-4xl font-extrabold w-full text-center uppercase text-primary mb-10">
          Let's Discuss
        </h1>
        <form
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit}
          action={async (formData) => {
            await post(formData);
          }}
        >
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Name"
              maxLength={500}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              maxLength={500}
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Subject"
              maxLength={500}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              maxLength={500}
              value={formData.phone}
              onChange={handleChange}
              className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <textarea
            name="message"
            maxLength={500}
            placeholder="Message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="px-1 py-3 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
          />
          <div className="flex justify-center">
            <Button
              aria="submit contact form"
              text="Submit"
              disabled={isSending}
            />
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
      <Map />
    </div>
  );
};

export default page;
