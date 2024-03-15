import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <iframe
          src="https://zeno.fm/player/Drincookmusic"
          width="100%"
          height="600px"
          frameBorder="1"
          scrolling="si"
        ></iframe>
        <Link
          href="https://zeno.fm/"
          target="_blank"
          className="block mt-4 text-center text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          A Zeno.FM Station
        </Link>
      </div>
    </div>
  );
};

export default Page;
