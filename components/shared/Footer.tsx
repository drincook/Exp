"use client";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import useMenuActive from "@/hooks/useMenuActive";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import Link from "next/link";
const Footer = () => {
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
      <div className="w-full py-5 bg-tertiary mt-10">
        <div className="w-[95%] mx-auto max-w-[1450px]">
          <div className="py-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:flex-col max-md:gap-8">
            <div className="flex-1 relative">
              <h1 className="text-4xl carattere-regular text-secondary p-4">
                <span className="p-6 r-4 items-center text-sexto">El</span>
              </h1>
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-secondary absolute top-[20px] ">
                  <span className="text-quaternary">Drin</span>
                  <span className="text-primary">cooK</span>
                </h1>
              </Link>
            </div>
            <ul className="flex item-center justify-center gap-16 fle-1 text-white max-md:flex-col max-md:gap-5">
              {navLinks.map((link, index) => {
                const isActive = useMenuActive(link.route);
                return (
                  <li key={index}>
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
              <FaFacebookSquare />
              <FaSquareInstagram />
            </div>
          </div>
          <div className="w-full text-center mt-3 text-sm text-white">
            <span>©All Rights Reserved www.eldrincook.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
