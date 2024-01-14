import styles from "./module.css"; // Asegúrate de tener un archivo CSS correspondiente
import Link from "next/link";
import Image from "next/image";

function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Contenido del menú lateral */}
      <div className={styles.sidebar}>
        <h1>Desarrollo personal</h1>
        <div>
          <p>Desarrollo</p>
          <Link
            href="https://go.hotmart.com/J87955773T"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              style={{ borderRadius: "10%", overflow: "hidden" }}
              src="/img/desarrollop.jpg"
              width={250}
              height={250}
              alt="Desarrollo personal"
            />
          </Link>
        </div>
        <div>
          <p>Masterclass</p>
          <Link
            href="https://go.hotmart.com/Q87997542Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              style={{ borderRadius: "10%", overflow: "hidden" }}
              src="/img/masterclass.jpg"
              width={250}
              height={250}
              alt="Masterclass"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
