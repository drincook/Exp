"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import productsData from "../../constants/ProductsData.json";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
  description: string;
  action: string;
  name: string;
  link: string;
  title: string;
}

const imageSize = 380;
const textSize = "text-xs";

const ProductReel: React.FC = () => {
  useEffect(() => {
    const swiperContainer = document.querySelector(
      ".swiper-container"
    ) as HTMLElement;
    if (!swiperContainer) {
      console.error("No se encontró el contenedor Swiper");
      return;
    }
    console.log("Contenedor Swiper seleccionado:", swiperContainer);

    const options = {
      modules: [Autoplay],
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      slidesPerView: "auto" as const,
      direction: "horizontal" as const,
    };
    new Swiper(swiperContainer, options);
  }, []);
  return (
    <div className="relative">
      <div className="top-0 left-0 right-0 bg-black text-white p-4 z-10 text-center">
        <p className={`${textSize} text-white`}>
          ¡Despierta tu potencial y conquista tus metas con nuestros productos!
          Descubre historias inspiradoras mientras sintonizas nuestra radio en
          línea. ¡Haz que cada compra sea un paso hacia una vida más plena!
        </p>
      </div>

      {/* Reel de productos */}
      <div className="flex flex-nowrap overflow-x-auto p-4 swiper-container mt-16">
        <div className="swiper-wrapper flex flex-row">
          {productsData.map((product: Product, index: number) => (
            <div
              key={product.id}
              className="swiper-slide flex-shrink-0 mr-4" // Agrega la clase swiper-slide
            >
              <div className="relative h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={index === 0 ? imageSize : imageSize / 1.6}
                  height={imageSize}
                  className="custom-size"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 p-2 rounded">
                    <h3 className="text-white text-center">{product.title}</h3>
                    <p className={`${textSize} text-white text-center`}>
                      {product.description}
                    </p>
                    <Link href={product.link}>
                      <button
                        className={`mt-2 px-4 py-2 bg-blue-500 ${textSize} text-white rounded hover:bg-blue-600 transition duration-300`}
                      >
                        {product.action}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReel;
