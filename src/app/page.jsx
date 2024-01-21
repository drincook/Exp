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
