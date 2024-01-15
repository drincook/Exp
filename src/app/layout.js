import "./globals.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Eldrincook",
  description:
    "¡Bienvenido a El DrinCook, tu destino para una experiencia multisensorial única!",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <div className="logo-container">
        <Image
          src="/img/logotipo.png"
          alt="Logo de tu sitio"
          className="logo"
          width={45} // Ajusta el ancho según tus necesidades
          height={22} // Ajusta la altura según tus necesidades
        />
      </div>
      
    </html>
  );
}
