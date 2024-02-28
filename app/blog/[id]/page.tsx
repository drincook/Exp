import Tag from "@/components/ui/Tag";
import Image from "next/image";

import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { CgVercel } from "react-icons/cg";

//const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const API_URL = process.env.NEXTAUTH_URL || "http://localhost:3000/api";

const getData = async (id: string) => {
  const res = await fetch(`${API_URL}/post/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const page = async ({ params }: { params: PostTypes }) => {
  const { id } = params;
  const post = await getData(id);
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[50vw] relative mb-5">
        <Image
          fill
          alt="image for blog"
          src={post.img}
          className="object-cover"
        />
      </div>
      <Tag text={post.category} />
      <h2 className="text-2xl md:tex-4xl font-extrabold uppercase text-tertiary my-3">
        {post.title}
      </h2>
      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-3/4 md:h-screen">
          <span className="uppercase text-xl md:text-2xl font-extrabold text-tertiary">
            Share:
          </span>
          <div className="flex text-2xl md:text-4xl gap-4 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>
        <article>
          <p className="text-0.5xl md:text-xl">{post.desc}</p>
          <div className="mt-5 flex gap-5 items-center">
            <Image
              src={post.user.image}
              width={500}
              height={500}
              alt={`Image of ${post.authorName}`}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post.user.name}</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
