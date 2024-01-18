import Link from "next/link";
import Image from "next/image";
import TargetPage from "./target/page";
import FooterPage from "./footer/page";

const page = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </Link>
      <p>Tu musica </p>
      <div>
        <TargetPage />
        <FooterPage />
      </div>
    </div>
  );
};

export default page;
