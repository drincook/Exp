import "./globals.css";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import Link from "next/link";
//import Icon from "icon-react";

import logotipo from "/public/img/logotipo.png";

export const metadata = {
  title: "Eldrincook",
  description:
    "¡Bienvenido a El DrinCook, tu destino para una experiencia multisensorial única!",
  icons: {
    icon: ["/logoicon.ico?v=4"],
    apple: ["/logoicon.png?=4"],
    shortcut: ["/logoicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Agregar ícono de la barra del navegador */}
        {metadata.icons.icon.map((icon, index) => (
          <Link
            key={`icon-${index}`}
            rel="icon"
            href={icon}
            type="logoicon.ico"
            size="32x32"
          />
        ))}
        {/* Agregar ícono de Apple */}
        {metadata.icons.apple.map((appleIcon, index) => (
          <Link
            key={`apple-icon-${index}`}
            rel="apple-touch-icon"
            href={appleIcon}
          />
        ))}
        {/* Agregar acceso directo */}
        {metadata.icons.shortcut.map((shortcut, index) => (
          <Link key={`shortcut-${index}`} rel="shortcut icon" href={shortcut} />
        ))}
      </Head>
      <Image
        src={logotipo}
        alt="Logo de tu sitio"
        className="logo"
        width={45} // Ajusta el ancho según tus necesidades
        height={22} // Ajusta la altura según tus necesidades
      />
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
