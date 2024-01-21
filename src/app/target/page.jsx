import "./targetpage.css";
import Link from "next/link";
import Image from "next/image";

const TargetCard = ({ title, imgSrc, linkHref, buttonText, description }) => {
  return (
    <div className="target-card">
      <h2>{title}</h2>
      <Link href={linkHref} target="_blank" rel="noopener noreferrer">
        <Image
          style={{ borderRadius: "10%", overflow: "hidden" }}
          src={imgSrc}
          width={100}
          height={100}
          alt={title}
        />
      </Link>
      <p>{description}</p>
      <Link href={linkHref} target="_blank" rel="noopener noreferrer">
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

const TargetPage = () => {
  return (
    <div className="caractTarg">
      <TargetCard
        title="Desarrollo Personal Completo"
        imgSrc="/img/desarrollop.jpg"
        linkHref="https://go.hotmart.com/J87955773T"
        buttonText="Comprar"
        description="Transforma tu vida, descubre el poder del desarrollo integral, conquista tus metas personales. ¡Inscríbete ahora y hazlo realidad!"
      />
      <TargetCard
        title="Master Personal Online"
        imgSrc="/img/masterclass.jpg"
        linkHref="https://go.hotmart.com/Q87997542Q"
        buttonText="Comprar"
        description="Desata tu potencial con nuestro Master Express. Transformación
          personal al alcance de un clic, alcanza tus metas con este Master de
          desarrollo personal. ¡Inscribete ahora para cambiar tu vida!"
      />
      <TargetCard
        title="Seminario Superación Depresión"
        imgSrc="/img/comosuperardepresion.jpg"
        linkHref="https://go.hotmart.com/W88770619M"
        buttonText="Comprar"
        description="Descubre cómo vencer la depresión en nuetro seminario, encuentra la
          luz, recupera tu bienestar emocional, aprende estrategias efectivas
          para superar la depresión. ¡Inscribete ahora y da el primer paso hacia
          una vida más feliz!"
      />
      <TargetCard
        title="Claves Desarrollo Deportivo Hijo"
        imgSrc="/img/desarrollodeportivo.jpg"
        linkHref="https://go.hotmart.com/M89282250L"
        buttonText="Comprar"
        description="Desbloquee el potencial de tu hijo atleta, descubre las 5 claves del
          desarrollo deportivo y personal, fomenta el crecimiento integral de tu
          hijo(a). ¡Asegura tu éxito con las claves esenciales!"
      />
      <TargetCard
        title="Curso Dj Profesional"
        imgSrc="/img/cursodj.jpg"
        linkHref="https://go.hotmart.com/J90157522P"
        buttonText="Comprar"
        description="¡Descubre el emocionante mundo de la música con nuestro Curso DJ Profesional! Aprende las mejores técnicas, domina la mezcla y crea sonidos únicos. ¡Haz de tu pasión por la música una profesión emocionante!"
      />
      <TargetCard
        title="Guia Seguridad Personal"
        imgSrc="/img/seguridadpersonal.jpg"
        linkHref="https://go.hotmart.com/C89233915L"
        buttonText="Comprar"
        description="Protege tu bienestar, descubre la clave de la seguridad personal, vive
          con confianza y tranquilidad. ¡Obten tu guia ahora para un futuro
          seguro!"
      />
      <TargetCard
        title="Tecnico Profecional de cejas"
        imgSrc="/img/cursocejas.png"
        linkHref="https://go.hotmart.com/R90145243D"
        buttonText="Comprar"
        description="¡Conviértete en Técnico Profesional en Cejas y Pestañas desde cero!.
          Aprende las técnicas clave para diseñar cejas y pestañas perfectas.
          Imagina tener un negocio exitoso ofreciendo servicios de
          micropigmentación. Regístrate ahora y comienza tu camino hacia el
          éxito. ¡Haz clic aquí para inscribirte!"
      />
      <TargetCard
        title="Ebook Postres en vasos TENDENCIA "
        imgSrc="/img/ebookpostres.png"
        linkHref="https://go.hotmart.com/S90157114H"
        buttonText="Comprar"
        description="Descubre el mundo irresistible de los postres en vasos. Explora recetas innovadoras y deliciosas que cautivarán tu paladar y sorprenderán a tus invitados. Imagina crear postres de apariencia profesional sin esfuerzo, elevando tus habilidades culinarias. ¡Obtén tu copia ahora y sumérgete en el arte de los postres en vasos! ¡Haz clic para disfrutar de una experiencia culinaria única!"
      />
    </div>
  );
};

export default TargetPage;
