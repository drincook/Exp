import "./globals.css";
import Image from "next/image";

import logotipo from "/public/img/logotipo.png";

export const metadata = {
  title: "Eldrincook",
  description:
    "¡Bienvenido a El DrinCook, tu destino para una experiencia multisensorial única!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="logo-container">
        <Image
          src={logotipo}
          alt="Logo de tu sitio"
          className="logo"
          width={45} // Ajusta el ancho según tus necesidades
          height={22} // Ajusta la altura según tus necesidades
        />
      </div>
      <body>{children}</body>
    </html>
  );
}
