import Link from "next/link";
import Image from "next/image";
import TargetPage from "./target/page";
import FooterPage from "./footer/page";

const page = () => {
  return (
    <div className="container">
      <h1 className="text-title">Bienvenido a El DrinCook</h1>
      <Link
        href="https://zeno.fm/radio/Drincookmusic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          style={{
            display: "inline-block",
            borderRadius: "10%",
            overflow: "hidden",
          }}
          src="/img/radio.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </Link>

      <p className="palamusica">Tu musica </p>
      <div>
        <div className="flex-container">
          <div className="imgpresentadora">
            <Image
              className="lamusha-logo"
              src="/img/lamushasha.png"
              width={200}
              height={190}
              alt="Lamusha Logo"
            />
            <p className="texcontenido">
              @lamushashadelatienda <br />
              tiktok
            </p>
          </div>
          <div className="text-presenter">
            <p className="presenter-text">
              Como sabes, somos una estación de transmisión independiente y tu
              apoyo es fundamental para nosotros. Mantener nuestra transmisión
              es un desafío constante y tu contribución hace posible que
              continuemos ofreciendo contenido de calidad. ¿Nos ayudas a seguir
              adelante?{" "}
            </p>
          </div>
        </div>
        <div className="zeno-radio">
          <iframe
            style={{
              display: "inline-block",
              borderRadius: "5%",
              overflow: "hidden",
            }}
            src="https://zeno.fm/player/Drincookmusic"
            width={300}
            height={300}
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <Link
            href="https://zeno.fm/"
            target="_blank"
            style={{
              display: "block",
              fontSize: "0.9em",
              lineHeight: "10px",
            }}
          >
            A Zeno.FM Station
          </Link>
        </div>

        <TargetPage />
        <FooterPage />
      </div>
    </div>
  );
};

export default page;
