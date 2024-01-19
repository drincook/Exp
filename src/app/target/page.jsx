import Link from "next/link";
import Image from "next/image";

const TargetPage = () => {
  return (
    <div className="caractTarg">
      <div
        style={{ width: "calc(50% - 10px)", margin: "10px", maxWidth: "174px" }}
      >
        <h2>Desarrollo Personal Completo</h2>
        <Link
          href="https://go.hotmart.com/J87955773T"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{ borderRadius: "10%", overflow: "hidden" }}
            src="/img/desarrollop.jpg"
            width={100}
            height={100}
            alt="Desarrollo personal"
          />
        </Link>
        <p>
          Tansforma tu vida, descubre el poder del desarrollo integral,
          conquista tus metas personales. ¡Incribete ahora y hazlo realidad!
        </p>
        <Link
          href="https://go.hotmart.com/J87955773T"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </Link>
      </div>
      <div
        style={{ width: "calc(50% - 10px)", margin: "10px", maxWidth: "174px" }}
      >
        <h2>Máster Personal Online</h2>
        <Link
          href="https://go.hotmart.com/Q87997542Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{ borderRadius: "10%", overflow: "hidden" }}
            src="/img/masterclass.jpg"
            width={100}
            height={100}
            alt="Masterclass"
          />
        </Link>
        <p>
          Desata tu potencial con nuestro Master Express. Transformación
          personal al alcance de un clic, alcanza tus metas con este Master de
          desarrollo personal. ¡Inscribete ahora para cambiar tu vida!
        </p>
        <Link
          href="https://go.hotmart.com/Q87997542Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </Link>
      </div>
      <div
        style={{ width: "calc(50% - 10px)", margin: "10px", maxWidth: "174px" }}
      >
        <h2>Seminario Superación Depresión</h2>
        <Link
          href="https://go.hotmart.com/W88770619M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{ borderRadius: "10%", overflow: "hidden" }}
            src="/img/comosuperardepresion.jpg"
            width={100}
            height={100}
            alt="Masterclass"
          />
        </Link>
        <p>
          Descubre cómo vencer la depresión en nuetro seminario, encuentra la
          luz, recupera tu bienestar emocional, aprende estrategias efectivas
          para superar la depresión. ¡Inscribete ahora y da el primer paso hacia
          una vida más feliz!
        </p>
        <Link
          href="https://go.hotmart.com/W88770619M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </Link>
      </div>
      <div
        style={{ width: "calc(50% - 10px)", margin: "10px", maxWidth: "147px" }}
      >
        <h2>Claves Desarrollo Deportivo Hijo</h2>
        <Link
          href="https://go.hotmart.com/M89282250L"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{ borderRadius: "10%", overflow: "hidden" }}
            src="/img/desarrollodeportivo.jpg"
            width={100}
            height={100}
            alt="Masterclass"
          />
        </Link>
        <p>
          Desbloquee el potencial de tu hijo atleta, descubre las 5 claves del
          desarrollo deportivo y personal, fomenta el crecimiento integral de tu
          hijo(a). ¡Asegura tu éxito con las claves esenciales!
        </p>
        <Link
          href="https://go.hotmart.com/M89282250L"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </Link>
      </div>
      <div
        style={{ width: "calc(50% - 10px)", margin: "10px", maxWidth: "174px" }}
      >
        <h2>Guía Seguridad Personal</h2>
        <Link
          href="https://go.hotmart.com/C89233915L"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            style={{ borderRadius: "10%", overflow: "hidden" }}
            src="/img/seguridadpersonal.jpg"
            width={100}
            height={100}
            alt="Masterclass"
          />
        </Link>
        <p>
          Protege tu bienestar, descubre la clave de la seguridad personal, vive
          con confianza y tranquilidad. ¡Obten tu guia ahora para un futuro
          seguro!
        </p>
        <Link
          href="https://go.hotmart.com/C89233915L"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default TargetPage;
