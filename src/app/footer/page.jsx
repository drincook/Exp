import Link from "next/link";
import Image from "next/image";
export default function FooterPage() {
  return (
    <div className="text-food">
      <footer
        style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}
      >
        <Link
          href="https://paypal.me/eldrincook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{
              display: "inline-block",
              borderRadius: "10%",
              overflow: "hidden",
            }}
            src="/img/logopaypal.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>
        <p>Contacto: info@eldrincook.com</p>
        <p>&copy; 2023 El DrinCook. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
