"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TikTokLoginButton,
} from "react-social-login-buttons";
import React from "react";

const page = () => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated");
      router.push("/");
    }
  }, [session?.status, router]);

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          return;
        }
        if (callback?.ok) {
          router.push("/");
        }
      })
      .finally(() => setIsLoading(false));
  };
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
      <div className="my-24 sm:mx-auto sm:max-w-4xl px-5">
        <div className="bg-white shadow sm:rounded-lg flex gap-5 justify-between h-96 overflow-hidden">
          <div className="mt-6 flex gap-2 flex-col justify-center items-center mx-auto">
            <div className="relative">
              <h1 className="text-4xl carattere-regular text-secondary p-4">
                <span className="p-6 r-4 items-center text-quinto">El</span>
              </h1>
              <Link
                href={"/"}
                className="d-flex mb-5 top-[1.2rem] b-8 absolute"
              >
                <h1 className="text-3xl font-extrabold text-secondary ">
                  <span className="text-quaternary">Drin</span>
                  <span className="text-primary">cooK</span>
                </h1>
              </Link>
              <Link
                href={"https://zeno.fm/radio/Drincookmusic/"}
                className="absolute top-[1.5rem] left-[7.875rem]"
              >
                <span className="">🎶</span>
              </Link>
            </div>
            <span className="text-sm">
              Log in or Sign up with the links below
            </span>
            <GoogleLoginButton onClick={() => socialAction("google")} />
            <FacebookLoginButton onClick={() => socialAction("facebook")} />
            <TikTokLoginButton onClick={() => socialAction("tiktok")} />
          </div>
          <Image
            src="/assets/access.jpg"
            height={500}
            width={500}
            alt="Sign up form image"
            className="object-cover lg:block hidden"
          />
        </div>
      </div>
    </>
  );
};

export default page;
