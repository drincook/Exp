"use client";
import { CSSProperties } from "react";
import { useEffect, useState, useRef } from "react";
import { dataComers } from "@/constants/dataComers.1";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalTime = 11000; //10000

  /*useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const totalWidth = containerWidth * dataComers.length;

    const resetScroll = () => {
      setScrollX(0);
    };
    const interval = setInterval(() => {
      setScrollX((prevScrollX) => {
        const nextScrollX = prevScrollX + containerWidth;
        return nextScrollX >= totalWidth ? 0 : nextScrollX;
      });
    }, intervalTime);

    setTimeout(resetScroll, -900 * dataComers.length);

    return () => clearInterval(interval);
  }, []);*/

  const containerStyle: CSSProperties = {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "thin",
    scrollSnapType: "x mandatory",
  };

  const scrollStyle = useSpring({
    transform: `translateX(-${scrollX}px)`,
    config: {
      duration: 11000, //10000
    },
  });

  return (
    <div className="w-full overflow-hidden">
      <div
        className="carousel-container w-full"
        style={containerStyle}
        ref={containerRef}
      >
        {dataComers.map((item, index) => (
          <animated.div
            key={index}
            className="carousel-item max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md flex items-start"
            style={{ ...scrollStyle, flex: "0 0 auto", width: "100%" }}
          >
            <div className="w-1/3 pr-4 flex-shrink-0">
              <Image
                alt={item.titulo}
                src={item.url_imagen}
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-lg font-semibold mb-2 text-center">
                {item.titulo}
              </h2>
              <div className="max-w-xs">
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="text-blue-500 hover:underline bg-blue-200 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                  <Link href={item.url_enlace}>Mas informacion</Link>
                </button>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
