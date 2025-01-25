"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams

const BlogDetailPage = () => {
  const { slug } = useParams(); // Use useParams to get the slug
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Wait until slug is available

    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://saleelvt-cyberceed-back-end-5.onrender.com/api/get_blog_by_slug?slug=${slug}`
        );
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.error("Error fetching blog:", response.statusText);
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) return <p>Loading blog post...</p>;

  if (!blog) {
    return <p>Blog post not found. Please try again later.</p>;
  }

  return (
    <div className="blog-detail" style={styles.container}>
      <h1 style={styles.title}>{blog.title}</h1>
      <div className="image-section" style={styles.imageContainer}>
        <img
          src={blog.imageUrl || "default-image.jpg"}
          alt="Blog Image"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <p
          style={styles.description}
          dangerouslySetInnerHTML={{ __html: blog.formattedDescription }}
        ></p>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
 
    borderRadius: "8px",
 
  },
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    maxWidth: "700px",
    height: "auto",
  },
  contentContainer: {
    padding: "10px 20px",
 
    borderRadius: "8px",
 
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default BlogDetailPage;
