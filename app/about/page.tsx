"use client";
import Overlay from "@/components/ui/Overlay";
import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Carattere&display=swap");
        .carattere-regular {
          font-family: "Carattere", cursive;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <div className="relative h-[500px] w-full">
          <Image
            src="/assets/about.jpg"
            fill
            alt="about image"
            className="object-cover"
          />
          <Overlay />
          <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
            About Us
          </h1>
        </div>
        <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
          <p>
            ¡Bienvenidos a Drincook! En Drincook, nos apasiona la fusión entre
            la música, la gastronomía y los viajes de aventura, creando así una
            experiencia verdaderamente única. Nuestra misión es explorar la
            diversidad musical mientras nos deleitamos con exquisitos platos
            culinarios y vivimos emocionantes aventuras alrededor del mundo.
            "Drincook, tu estilo de vida", va más allá de una simple frase;
            representa nuestra filosofía de vida, donde cada experiencia es una
            melodía que nos acompaña en nuestro viaje. Nos dedicamos a mostrar
            estilos de vida diversos que encuentran su conexión a través de la
            música, la comida y los viajes. Nuestros valores fundamentales
            incluyen la inclusión, la celebración de la diversidad y la pasión
            por descubrir nuevos horizontes. Nos comprometemos a fomentar la
            sensibilidad cultural y a construir puentes entre personas de
            distintos orígenes, creando así una comunidad global unida por la
            pasión por la música, la comida y la aventura. Únete a nosotros en
            Drincook, donde la música, la comida y los viajes se entrelazan para
            crear momentos memorables y experiencias inolvidables en cada paso
            de nuestro viaje de la vida.
          </p>
          <div className="w-full items-center flex justify-center">
            <div className="carattere-regular">
              <h2 className="text-5xl">Drincook🖋</h2>
              <p className="carattere-regular text-3xl">
                Nota: La página es un blog donde publicaremos posts para compartir nuestras historias y experiencias, acompañadas de imágenes que reflejen paisajes naturales, arte culinario y momentos emocionantes de nuestras aventuras alrededor del mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
