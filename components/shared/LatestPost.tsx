"use client";
import { useState } from "react";
//import { blogData } from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import { PostTypes } from "@/types/postTypes";

const LatestPost: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {
  //const latestpost = blogData.filter((blog) => blog.latestPost === true);
  const latestPost = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const [visibleBlogs, setVisibleBlogs] = useState(5);
  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };
  return (
    <section className="col-span-2">
      <div className="w-full text-center">
        <h2
          id="latest-post"
          className="text-center text2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Latest Post
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {latestPost.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard post={post as any} key={id} />
        ))}
        {visibleBlogs < latestPost.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog post"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPost;