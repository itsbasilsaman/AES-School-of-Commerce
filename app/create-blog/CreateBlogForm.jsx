"use client";
import { useState } from "react";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    brand: "",
    description: "",
    imageUrl: "",
    metaTitle: "",
    metaDescription: "",
    altText: "",
  });

  const [descriptionPreview, setDescriptionPreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, description: value });
    updatePreview(value);
  };

  const updatePreview = (description) => {
    const formattedText = description
      .replace(/^# (.+)$/gm, "<h1>$1</h1>") 
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^- (.+)$/gm, "<ul><li>$1</li></ul>") 
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
        '<a href="$2" target="_blank">$1</a>'
      )  
      .replace(/\n\n/g, "<p></p>")  
      .replace(/\n/g, "<br />");  

    setDescriptionPreview(formattedText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formObject = { ...formData, formattedDescription: descriptionPreview };

    try {
      const createBlogAPI = "https://saleelvt-cyberceed-back-end-5.onrender.com/api/create_blog";
      const response = await fetch(createBlogAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Blog created successfully!");
        setFormData({
          title: "",
          slug: "",
          brand: "",
          description: "",
          imageUrl: "",
          metaTitle: "",
          metaDescription: "",
          altText: "",
        });
        setDescriptionPreview("");
      } else {
        const errorResult = await response.json();
        alert("Error creating blog: " + errorResult.message);
      }
    } catch (error) {
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Create Blog</h2>
        <form onSubmit={handleSubmit} id="blogForm">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleDescriptionChange}
              required
              placeholder="Use special syntax: # for headings, - for bullet points, [link text](url) for links, and paragraphs as normal text."
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
            <div
              id="description-output"
              className="mt-4 p-4 bg-gray-50 rounded-lg"
              dangerouslySetInnerHTML={{ __html: descriptionPreview }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">Meta Title</label>
            <input
              type="text"
              id="meta-title"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">Meta Description</label>
            <textarea
              id="meta-description"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="alt-text" className="block text-sm font-medium text-gray-700">Alt Text</label>
            <input
              type="text"
              id="alt-text"
              name="altText"
              value={formData.altText}
              onChange={handleInputChange}
              required
              className="mt-2 p-3 w-full border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
