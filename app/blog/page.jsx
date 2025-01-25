"use client";
import React, { useEffect, useState } from "react";
import FancyBoxBlog from "./FancyBoxBlog";
import Spinner from "@components/Spinner";

export const metadata = {
  title: "Blog | AE's School of Commerce",
  description: "Read the latest blogs and updates from AE's School of Commerce.",
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const brand = "AES";
        const response = await fetch(
          `https://saleelvt-cyberceed-back-end-5.onrender.com/api/get_blog?brand=${brand}`
        );
        const data = await response.json();

        if (!data.blogPosts || !Array.isArray(data.blogPosts)) {
          throw new Error("Invalid API response format");
        }

        setBlogPosts(data.blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="overflow-hidden bg-[#fbfbfb] px-5% font-main py-20 md:py-[100px] lg:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold mb-10">
          Our Best Blog Posts
        </h2>

        {loading ? (
          <>
            <Spinner />
            <p className="text-center">Loading blog posts...</p>
          </>
        ) : (
          <FancyBoxBlog>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <a
                    href={`/blog/${post.slug}`} // Wrap the entire container with an anchor tag
                    className="block"
                  >
                    <div className="relative">
                      <img
                        src={post.imageUrl || "default-image.jpg"}
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title.length > 30
                          ? post.title.slice(0, 30) + "..."
                          : post.title}
                      </h3>
                      <p className="text-sm text-gray-600">{post.content}</p>
                      <p className="text-blue-600 text-sm font-medium mt-3">
                        View More
                      </p>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </FancyBoxBlog>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
